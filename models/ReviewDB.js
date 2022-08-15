"use strict";

var db = require('../db-connection');

class ReviewDB{
    getAllReview(callback){
        var sql = "SELECT review._id, review.date, review.comment, review.ratingReview, review.priceReview, review.restaurantReview, user.username, user.profilePic from mydb.review INNER JOIN mydb.user ON review.idUser = user._id";
        db.query(sql, callback);
    }
    getAllReviewByUserRestaurant(idUser, callback){  
        var sql = "SELECT date, comment, ratingReview, priceReview from mydb.review INNER JOIN mydb.restaurants ON restaurants._id = review.idRestaurant WHERE review.idUser = ?";
        db.query(sql, [idUser],callback);
    }
    addReview(review, callback){
        var sql = "INSERT INTO review (idUser, idRestaurant, date, comment, ratingReview, priceReview, restaurantReview, usernameReview) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getidUser(), review.getidRestaurant(), review.getDate(), review.getComment(), review.getRatingReview(), review.getPriceReview(), review.getUsernameReview(), review.getRestaurantReview()], callback);
    }
    updateReview(review, callback){
        var sql = "UPDATE review SET date = ?, comment = ?, ratingReview = ?, priceReview = ?  WHERE _id = ?";
        return db.query(sql, [review.getDate(), review.getComment(), review.getRatingReview(), review.getPriceReview(), review.getId()], callback);
    }
    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE _id = ?";
        return db.query(sql, [reviewID], callback);
    }
}

module.exports = ReviewDB;