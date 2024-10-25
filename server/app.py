from flask import Flask, request, jsonify
from flask_cors import CORS
# from meta_ai_api import MetaAI

from groq import Groq
GROQ_API_KEY = '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'
client = Groq(api_key=GROQ_API_KEY) 
llama_model = "llama3-groq-8b-8192-tool-use-preview"

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/", methods=["POST"])  # Allow only POST requests
def hello_world():
    data = request.get_json()  # Retrieve JSON data from the POST request
    response = query_groq(client, data)
    print(response)
    return jsonify(response)
#     ai = MetaAI()
#     response = ai.prompt(message=data.get("message", ""))
#     message = response.get("message", "")
#     formatted_message = message.replace("\\n", "\n")
#     return jsonify({"message": formatted_message})  # Return JSON response



# user_prompt = "What is the capital of France?"
def query_groq(client, user_prompt):
    chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": user_prompt
                }
            ],
            model=llama_model
        )
    return chat_completion.choices[0].message.content

# print(query_groq(client, user_prompt))