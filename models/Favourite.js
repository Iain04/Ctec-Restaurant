"use strict";

const res = require("express/lib/response");



class Favourite {

    constructor(id, idUserFav, idRestaurantFav, favRestaurant, favUser) {

        this.id = id;

        this.idUserFav = idUserFav;

        this.idRestaurantFav = idRestaurantFav;

        this.favRestaurant = favRestaurant;

        this.favUser = favUser;

    }



    getId() {

        return this.id;

    }



    getidUserFav() {

        return this.idUserFav;

    }



    getidRestaurantFav() {

        return this.idRestaurantFav;

    }

    getFavRestaurant() {
        return this.favRestaurant;
    }

    getFavUser() {
        return this.favUser;
    }

    setIdUser(idUser) {

        this.idUser = idUser;

    }


    setIdRestaurantFav(idRestaurantFav) {

        this.idRestaurantFav = idRestaurantFav;

    }

    setIdUserFav(idUserFav) {

        this.idUserFav = idUserFav;

    }

    setFavRestaurant(favRestaurant) {

        this.favRestaurant = favRestaurant;

    }

    setFavUser(favUser) {

        this.favUser = favUser;

    }


}



module.exports = Favourite;