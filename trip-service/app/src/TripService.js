"use strict";

let UserSession = require('./UserSession');
let TripDAO = require('./TripDAO');
class TripService {
    getTripsByUser(user,loggedUser) {

        if(loggedUser == null)
            throw new Error('User not logged in.');
                
        return user.isFriendWith(loggedUser) 
                        ? TripDAO.findTripsByUser(user)
                        : [];
    }
}

module.exports = TripService
