"use strict";

module.exports = class User {

    constructor(){
        this._trips = [];
        this._friends = [];
    }

    getFriends(){
        return this._friends;
    }

    addFriend(name){
        this._friends.push(name);
    }

    addTrip(name){
        this._trips = name;
    }

    getTrips(){
        return this._trips;
    }
}