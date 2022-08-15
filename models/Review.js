"use strict";

const res = require("express/lib/response");



class Review {

    constructor(id, idUser, idRestaurant, date, comment, ratingReview, priceReview, usernameReview, restaurantReview) {

        this.id = id;

        this.idUser = idUser;

        this.idRestaurant = idRestaurant;

        this.date = date;

        this.comment = comment;

        this.ratingReview = ratingReview;

        this.priceReview = priceReview;

        this.usernameReview = usernameReview;

        this.restaurantReview = restaurantReview;

    }



    getId() {

        return this.id;

    }



    getidUser() {

        return this.idUser;

    }



    getidRestaurant() {

        return this.idRestaurant;

    }

    getDate() {
        return this.date;
    }

    getComment() {
        return this.comment;
    }

    getRatingReview() {
        return this.ratingReview;
    
    }

    getPriceReview() {
        return this.priceReview;
    
    }

    getUsernameReview() {
        return this.usernameReview;
    
    }

    getRestaurantReview() {
        return this.restaurantReview;
    
    }

    setIdUser(idUser) {

        this.idUser = idUser;

    }


    setIdRestaurant(idRestaurant) {

        this.idRestaurant = idRestaurant;

    }

    setdate(date) {

        this.date = date;

    }

    setComment(comment) {

        this.comment = comment;

    }

    setRatingReview(ratingReview) {

        this.ratingReview = ratingReview;

    }

    setPriceReview(priceReview) {

        this.priceReview = priceReview;

    }
    
    setUsernameReview(usernameReview) {

        this.usernameReview = usernameReview;

    }

    setRestaurantReview(restaurantReview) {

        this.restaurantReview = restaurantReview;

    }

}



module.exports = Review;