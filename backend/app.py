from flask import Flask, jsonify # type: ignore

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"

@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "Hello, World"})

if __name__ == "__main__":
    app.run(debug=True)
