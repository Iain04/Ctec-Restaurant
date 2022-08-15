"use strict";

const Favourite = require('../models/Favourite');
const FavouriteDB = require('../models/FavouriteDB');



var favouriteDB = new FavouriteDB();

function getFavouriteRestaurant(request, respond){
    var idUserFav = request.params.id;
    favouriteDB.getFavouriteRestaurant(idUserFav, function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });
}

function addFavourite(request, respond){
    var favourite = new Favourite(null, request.body.idUserFav, request.body.idRestaurantFav, request.body.favRestaurant, request.body.favUser);
    favouriteDB.addFavourite(favourite, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function deleteFavourite(request, respond){
    var favouriteID = request.params.id;
    favouriteDB.deleteFavourite(favouriteID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getFavouriteRestaurant, addFavourite, deleteFavourite};