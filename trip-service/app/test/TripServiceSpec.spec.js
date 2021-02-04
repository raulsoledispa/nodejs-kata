"use strict";

jest.mock('../src/UserSession');
jest.mock('../src/TripDAO');
let TripService = require('../src/TripService');
const User = require('../src/User');
const TripDAO = require('../src/TripDAO');
let tripService;
const LOGGED_USER = new User();
const GUEST = null;
const BOB = new User();
const PAUL = new User();

describe('TripService', () => {

    beforeAll(() => {
        TripDAO.findTripsByUser.mockReturnValue(['Ecuador','Colombia']);
        tripService = new TripService(TripDAO);
    });

    it('should throw an error when user is not logged in', () => {
        expect(() => {
            tripService.getTripsByUser(null,GUEST);
        }).toThrow(/User not logged in/);
    });

    
    it('should not return any trips when users are not friends', () => {
        const user = new User();

        const friends = tripService.getTripsByUser(user,LOGGED_USER);
        expect(friends).toHaveLength(0);
    });
    

    
    it('should return trips when users are friends', () => {
        
        let user = new User();
        user.addFriend(BOB);
        user.addFriend(PAUL);
        user.addFriend(LOGGED_USER);

        const friends = tripService.getTripsByUser(user,LOGGED_USER);
        expect(friends).toHaveLength(2);
    });

});
