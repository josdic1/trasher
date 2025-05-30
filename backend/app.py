from flask import Flask, jsonify
from flask import request 
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(
    app,
    origins=["http://localhost:5173"],
    supports_credentials=True,
    allow_headers="*",
    methods=["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
)


def load_data():
    with open('db.json') as f:
        return json.load(f)

@app.route('/')
def home():
    return {'message': '🚛 Trash backend is running!'}

@app.route('/houses')
def get_houses():
    data = load_data()
    return jsonify(data['houses'])

@app.route('/houses', methods=['POST'])
def add_house():
    return {'message': 'POST route hit'}

@app.route('/pickups')
def get_pickups():
    data = load_data()
    return jsonify(data['pickups'])

@app.route('/houses/<house_id>/pickups')
def get_pickups_by_house(house_id):
    data = load_data()
    house_pickups = [p for p in data['pickups'] if p['houseId'] == house_id]
    return jsonify(house_pickups)

if __name__ == '__main__':
    app.run(debug=True)
