from flask import Flask, request, jsonify
import os
import ast
import json
import ssl
from flask_cors import CORS
from apiCalls import summarize_transcript, parse_reviews

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/", methods=['GET'])
def home():
    return "PSREAD API"


@app.route("/", methods=['POST'])
def summarize_text():
    data = request.get_json()
    text_transcript = data["text"]
    return summarize_transcript(text_transcript)

@app.route("/reviews", methods=['POST'])
def summarize_reviews():
    data = request.get_json()
    text_reviews = data["text"]
    return parse_reviews(text_reviews)


if __name__ == '__main__':
    app.run(ssl_context=('cert.pem', 'key.pem'), debug=True)
