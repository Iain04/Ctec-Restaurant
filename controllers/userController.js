"use strict";
const UserDB = require('../models/UserDB');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');''
var jwt = require('jsonwebtoken');
var secret = "secretkey";
var userDB = new UserDB();

function getAllUser(request, respond){
    userDB.getAllUser(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function login(request, respond){
    var email = request.body.email;
    var password = request.body.password;
    userDB.login(email, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            if (result.length > 0) {
                const hash = result[0].password;
                var flag = bcrypt.compareSync(password,hash);
                if (flag){
                    var token = jwt.sign(email, secret);
                    result[0].token = token;
                    respond.json(result);
                }
                else {
                    respond.json({result:"false"});
                }
            }
            else {
                respond.json({result:"false"});
            }
        }
    });

}
 // firstName, username , email, gender, contactUser, profilePic, lastName, address, password
function addUser(request, respond){
    var password = request.body.password;
    password = bcrypt.hashSync(password,10);
    var user = new User(null, request.body.firstName, request.body.username, request.body.email, request.body.gender, request.body.contactUser, request.body.profilePic, request.body.lastName, request.body.address, password);
    userDB.addUser(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function getMember(request, respond){
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        userDB.getMember(decoded, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({result:"false"})
    }
}

function updateUser(request, respond){
    var token = request.body.token;
    var username = request.body.username;
    var contactUser = request.body.contactUser;
    var profilePic = request.body.profilePic;
    var address = request.body.address;
    try {
        var decoded = jwt.verify(token, secret);
        userDB.updateUser(username, contactUser, profilePic, address, decoded, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({result:"false"})
    }
}

function deleteUser(request, respond){
    var userID = request.params.id;
    userDB.deleteUser(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllUser, login, getMember, addUser, updateUser, deleteUser};
