"use strict";
const { isEqual } = require('lodash')
module.exports = class User {

    constructor(){
        this._trips = [];
        this._friends = [];
    }

    getFriends(){
        return this._friends;
    }

    addFriend(user){
        this._friends.push(user);
    }

    addTrip(trip){
        this._trips.push(trip);
    }

    getTrips(){
        return this._trips;
    }

    isFriendWith(user){
        return this._friends.find(friend => isEqual(friend,user));
    }
}