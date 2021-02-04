"use strict";

class TripService {

    constructor(tripDAO){
        this.tripDAO = tripDAO; 
    }

    getTripsByUser(user,loggedUser) {

        this.validate(loggedUser);
                
        return user.isFriendWith(loggedUser) 
                        ? this.tripDAO.findTripsByUser(user)
                        : this.anyTrips();
    }

    anyTrips() {
        return [];
    }

    validate(loggedUser) {
        if (loggedUser == null)
            throw new Error('User not logged in.');
    }

    
}

module.exports = TripService
