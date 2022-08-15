"use strict";



var db = require('../db-connection');

class RestaurantDB{

    getAllRestaurant(callback){

        var sql = "SELECT restaurants.picture, restaurants._id, restaurants.restaurantName, restaurants.category, restaurants.location, restaurants.contact, restaurants.openingHours, restaurants.description, restaurants.address, restaurants.longtitude, restaurants.latitude, ROUND(avg(review.priceReview),1) as averagePrice, ROUND(avg(review.ratingReview),1) as averageRating, count(distinct review._id) as totalReviews from mydb.restaurants INNER JOIN review ON restaurants._id = review.idRestaurant GROUP BY restaurants._id";

        db.query(sql, callback);

    }

    getAllFeatured(callback){

        var sql = "SELECT restaurants.picture, restaurants._id, restaurants.restaurantName, restaurants.category, restaurants.location, restaurants.contact, restaurants.openingHours, restaurants.description, restaurants.address, ROUND(avg(review.priceReview),1) as averagePrice, ROUND(avg(review.ratingReview),1) as averageRating, count(distinct review._id) as totalReviews from mydb.restaurants INNER JOIN review ON restaurants._id = review.idRestaurant GROUP BY restaurants._id ORDER BY avg(review.ratingReview) DESC LIMIT 3;"

        db.query(sql, callback);
        
    }

    searchRestaurant(keyword, callback){
        var key = "%" + keyword + "%";
        var sql = "SELECT restaurants.picture, restaurants._id, restaurants.restaurantName, restaurants.category, restaurants.location, restaurants.contact, restaurants.openingHours, restaurants.description, restaurants.address, ROUND(avg(review.priceReview),1) as averagePrice, ROUND(avg(review.ratingReview),1) as averageRating, count(distinct review._id) as totalReviews from mydb.restaurants INNER JOIN review ON restaurants._id = review.idRestaurant WHERE restaurantName like ?";
        db.query(sql, [key], callback);
    }

    getRestaurantCategory(keyword, callback){
        var key = "%" + keyword + "%";
        var sql = "SELECT restaurants.picture, restaurants._id, restaurants.restaurantName, restaurants.category, restaurants.location, restaurants.contact, restaurants.openingHours, restaurants.description, restaurants.address,restaurants.contact, restaurants.openingHours, restaurants.description, restaurants.address, ROUND(avg(review.priceReview),1) as averagePrice, ROUND(avg(review.ratingReview),1) as averageRating, count(distinct review._id) as totalReviews from mydb.restaurants INNER JOIN review ON restaurants._id = review.idRestaurant WHERE category like ?";
        db.query(sql, [key], callback);
    }

    getAllRestaurantUserReview(callback){

        var sql = "SELECT * from ((mydb.restaurants INNER JOIN mydb.review ON restaurants._id = review.idRestaurant) INNER JOIN mydb.user ON user._id = review.idUser)";

        db.query(sql, callback);

    }
}



module.exports = RestaurantDB;