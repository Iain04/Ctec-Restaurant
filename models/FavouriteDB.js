"use strict";

var db = require('../db-connection');

class FavouriteDB{
    getFavouriteRestaurant(idUserFav, callback){
        var sql = "SELECT * from mydb.restaurants INNER JOIN mydb.favourite ON restaurants._id = favourite.idRestaurantFav WHERE favourite.idUserFav = ?"
        return db.query(sql, [idUserFav], callback);
    }
    addFavourite(favourite,callback){
        var sql = "INSERT INTO favourite (idUserFav, idRestaurantFav, favRestaurant, favUser) VALUES (?, ?, ?, ?)"
        db.query(sql, [favourite.getidUserFav(), favourite.getidRestaurantFav(), favourite.getFavRestaurant(), favourite.getFavUser()], callback)
    }
    deleteFavourite(favouriteID,callback){
        var sql = "DELETE FROM favourite WHERE _id = ?"
        db.query(sql, [favouriteID] , callback)
    }
    

}

module.exports = FavouriteDB;