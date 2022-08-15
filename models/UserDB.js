"use strict";

var db = require('../db-connection');

class UserDB{
    getAllUser(callback){
        var sql = "SELECT * from mydb.user";
        db.query(sql, callback);
    }
    login(email, callback){
        var sql = "SELECT password, username, profilePic, _id from mydb.user WHERE email = ?";
        return db.query(sql,[email], callback);
    }
    getMember(email, callback) {
        var sql = "SELECT distinct email, profilePic, contactUser, username, address from mydb.user WHERE email = ?"
        db.query(sql,[email], callback);
    }
    addUser(user, callback){  // firstName, username , email, gender, contactUser, profilePic, lastName, address
        var sql = "INSERT INTO user (firstName, username , email, gender, contactUser, profilePic, lastName, address, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [user.getFirstName(), user.getUsername(), user.getEmail(), user.getGender(), user.getContactUser(), user.getProfilePic(), user.getLastName(), user.getAddress(), user.getPassword()], callback);
    }
    updateUser(username, contactUser, profilePic, address, email, callback){
        var sql = "UPDATE user SET username = ?, contactUser = ?, profilePic = ?, address = ? WHERE email = ?";
        return db.query(sql, [username, contactUser, profilePic, address, email], callback);
    }
    deleteUser(userID, callback){
        var sql = "DELETE from user WHERE _id = ?";
        return db.query(sql, [userID], callback);
    }
}

module.exports = UserDB;