"use strict";

const RestaurantDB = require('../models/RestaurantDB');



var restaurantDB = new RestaurantDB();



function getAllRestaurant(request, respond){

    restaurantDB.getAllRestaurant(function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });
}

function getAllFeatured(request, respond){

    restaurantDB.getAllFeatured(function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });
}

function searchRestaurant(request, respond){
    var searchTerm = request.body.search;
    restaurantDB.searchRestaurant(searchTerm, function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });
}

function getRestaurantCategory(request, respond){
    var categoryTerm = request.body.category;
    restaurantDB.getRestaurantCategory(categoryTerm, function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });
}

function getAllRestaurantUserReview(request, respond){
    restaurantDB.getAllRestaurantUserReview(function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });

}


module.exports = {getAllRestaurant, searchRestaurant, getRestaurantCategory, getAllFeatured, getAllRestaurantUserReview};