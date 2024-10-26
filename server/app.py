from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from meta_ai_api import MetaAI
from transformers import BertTokenizer, BertModel
import torch.nn as nn

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load BERT tokenizer and model
# tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
# model = BertModel.from_pretrained('bert-base-uncased')
# classification_head = nn.Linear(model.config.hidden_size, 37)

# # Load saved state dictionaries
# model.load_state_dict(torch.load("bert_classifier_state_dict.pth", map_location=torch.device('cpu')))
# classification_head.load_state_dict(torch.load("classification_head.pth", map_location=torch.device('cpu')))

# # Set models to evaluation mode
# model.eval()
# classification_head.eval()


# def get_binary_embedding(query):
#     # Tokenize input query
#     inputs = tokenizer(query, return_tensors="pt", truncation=True, padding="max_length", max_length=128)
    
#     with torch.no_grad():
#         # Extract CLS token embedding
#         cls_embedding = model(**inputs).last_hidden_state[:, 0, :]
#         logits = classification_head(cls_embedding)
#         binary_embedding = (torch.sigmoid(logits) > 0.5).int()  # Thresholding to get binary output
#     return binary_embedding.squeeze().tolist()

if __name__ == "__main__":
    app.run(debug=True)
@app.route("/", methods=["POST"])
def hello_world():
    data = request.get_json()  # Retrieve JSON data from the POST request
    ai = MetaAI()
    # binary_embedding = get_binary_embedding(data)  # Use the "query" key from the JSON data
    
    # Construct the message for the first response
    response1 = ai.prompt(
        message="What cultural nuances and customer behaviour patterns should I know to open a " + data.get("business_type", "") +
        ". Suggest me some places or regions in Mumbai such that I can maximize my profits. Also, provide the relevance score of each place."
    )
    
    # Construct the message for the second response
    response2 = ai.prompt(
        message="""
        Context: {}
        You will be given a long descriptive text.
        Extract the information of places from the provided text.
        Also extract the relevance score provided.
        Now give the list of places along with their scores.
        Give the output in a list of dictionaries with keys as 'place' and 'score'.
        """.format(response1.get("message", ""))
    )
    
    return jsonify({
        "message": response1.get("message", "")
    })  # Combine both into a single dictionary for JSON response


