from flask import Flask
from meta_ai_api import MetaAI

app = Flask(__name__)

@app.route("/")


def hello_world():
    ai = MetaAI()
    response = ai.prompt(message="give scores to each region of mumbai based how well a cake shop would do there. give only scores and no other info ")
    message = response.get("message", "")
    formatted_message = message.replace("\\n", "\n")
    return message