"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/users", methods=['GET'])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200


@api.route('/users', methods=['POST'])
def create_user():
    user = User()
    user.id = request.json.get('id')
    user.name = request.json.get('name')
    user.nameAdm = request.json.get('nameAdm')
    user.email = request.json.get('email')
    user.password = request.json.get('password')
    user.passwordAdm = request.json.get('passwordAdm')
    user.phone = request.json.get('phone')
    user.default_shipping_address = request.json.get(
        'default_shipping_address')
    user.save()
    return jsonify(user.serialize()), 201
