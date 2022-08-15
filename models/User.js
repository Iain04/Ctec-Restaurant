"use strict";

const res = require("express/lib/response");



class User {

    constructor(id, firstName, username , email, gender, contactUser, profilePic, lastName, address, password) {

        this.id = id;

        this.firstName = firstName;

        this.username = username;

        this.email = email;

        this.gender = gender;

        this.contactUser = contactUser;

        this.profilePic = profilePic;

        this.lastName = lastName;

        this.address = address;

        this.password = password;

    }



    getId() {

        return this.id;

    }



    getFirstName() {

        return this.firstName;

    }

    getUsername() {

        return this.username;

    }



    getEmail() {

        return this.email;

    }

    getGender() {
        return this.gender;
    }

    getContactUser() {
        return this.contactUser;
    }

    getProfilePic() {
        return this.profilePic;
    
    }

    getLastName() {
        return this.lastName;
    
    }

    getAddress() {
        return this.address;
    
    }

    getPassword() {
        return this.password;
    
    }


    setFirstName(firstName) {

        this.firstName = firstName;

    }

    setUsername(username){
        this.username = username;
    }


    setEmail(email) {

        this.email = email;

    }

    setGender(gender) {

        this.gender = gender;

    }

    setContactUser(contactUser) {

        this.contactUser = contactUser;

    }

    setProfilePic(profilePic) {

        this.profilePic = profilePic;

    }

    setLastName(lastName) {

        this.lastName = lastName;

    }
    
    setAddress(address) {

        this.address = address;

    }

    setPassword(password) {

        this.password = password;

    }
}



module.exports = User;