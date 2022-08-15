"use strict";

const ReviewDB = require('../models/ReviewDB');
const Review = require('../models/Review.js');

var reviewDB = new ReviewDB();

function getAllReview(request, respond){
    reviewDB.getAllReview(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function getAllReviewByUserRestaurant(request, respond){
    var idUser = request.params.id;
    reviewDB.getAllReviewByUserRestaurant(idUser, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function addReview(request, respond){
    var dateObj = new Date();
    var month_array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day_array = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    var date = dateObj.getUTCDate();
    var month = dateObj.getUTCMonth();
    var year = dateObj.getUTCFullYear();
    var day = dateObj.getDay();

    var newdate = day_array[day] + ", " + date + " " + month_array[month] + " " + year;
    var review = new Review(null, request.body.idUser, request.body.idRestaurant, newdate.toString(), request.body.comment, request.body.ratingReview, request.body.priceReview, request.body.restaurantReview, request.body.usernameReview);
    reviewDB.addReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function updateReview(request, respond){ // comment = ?, ratingReview = ?, priceReview = ?  WHERE _id = ?
    var dateObj = new Date();
    var month_array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day_array = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
    var date = dateObj.getUTCDate();
    var month = dateObj.getUTCMonth();
    var year = dateObj.getUTCFullYear();
    var day = dateObj.getDay();

    var newdate = day_array[day] + ", " + date + " " + month_array[month] + " " + year;
    var review = new Review(parseInt(request.params.id), null, null, newdate.toString(), request.body.comment, request.body.ratingReview, request.body.priceReview);
    reviewDB.updateReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview(request, respond){
    var reviewID = request.params.id;
    reviewDB.deleteReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllReview, getAllReviewByUserRestaurant, addReview, updateReview, deleteReview};
