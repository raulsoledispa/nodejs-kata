"use strict";

jest.mock('../src/UserSession');
jest.mock('../src/TripDAO');
let TripService = require('../src/TripService');
const UserSession = require('../src/UserSession');
const User = require('../src/User');
const TripDAO = require('../src/TripDAO');
let tripService;
const LOGGED_USER = new User();
const GUEST = null;
const BOB = new User();
const PAUL = new User();

describe('TripService', () => {

    beforeEach(() => {
        tripService = new TripService();
    })

    it('should throw an error when user is not logged in', () => {
        UserSession.getLoggedUser.mockReturnValue(GUEST);
        expect(() => {
            tripService.getTripsByUser(null)
        }).toThrow(/User not logged in/);
    });

    
    it('should not return any trips when users are not friends', () => {
        UserSession.getLoggedUser.mockReturnValue(LOGGED_USER);
        const user = new User();

        tripService = new TripService();
        const friends = tripService.getTripsByUser(user);
        expect(friends).toHaveLength(0);
    });
    

    
    it('should return trips when users are friends', () => {
        UserSession.getLoggedUser.mockReturnValue(LOGGED_USER);
        TripDAO.findTripsByUser.mockReturnValue(['Ecuador','Colombia']);
        
        let user = new User();
        user.addFriend(BOB);
        user.addFriend(PAUL);
        user.addFriend(LOGGED_USER);

        tripService = new TripService();
        const friends = tripService.getTripsByUser(user);
        expect(friends).toHaveLength(2);
    });

});
