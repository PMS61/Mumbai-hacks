from flask import Flask, request, jsonify
from flask_cors import CORS
from meta_ai_api import MetaAI

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/", methods=["POST"])  # Allow only POST requests
def hello_world():
    data = request.get_json()  # Retrieve JSON data from the POST request
    ai = MetaAI()
    response = ai.prompt(message=data.get("message", ""))
    message = response.get("message", "")
    formatted_message = message.replace("\\n", "\n")
    return jsonify({"message": formatted_message})  # Return JSON response
