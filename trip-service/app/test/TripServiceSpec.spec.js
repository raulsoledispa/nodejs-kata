"use strict";

jest.mock('../src/UserSession');
jest.mock('../src/TripDAO');
let TripService = require('../src/TripService');
const UserSession = require('../src/UserSession');
const User = require('../src/User');
const TripDAO = require('../src/TripDAO');
let tripService;
describe('TripService', () => {

    beforeEach(() => {
        tripService = new TripService();
    })

    it('should throw on error when user is not logged in', () => {
        UserSession.getLoggedUser.mockReturnValue(null);
        expect(() => {
            tripService.getTripsByUser(null)
        }).toThrow(/User not logged in/);
    });

    
    it('should not return any trips when users are not friends', () => {
        UserSession.getLoggedUser.mockReturnValue('Soul');
        let user = new User();
        user.addFriend('Raul');
        user.addTrip('Ecuador');
        user.addTrip('Colombia');

        tripService = new TripService();
        const friends = tripService.getTripsByUser(user);
        expect(friends).toHaveLength(0);
    });
    

    
    it('should return friend trips when users are friends', () => {
        UserSession.getLoggedUser.mockReturnValue('Soul');
        TripDAO.findTripsByUser.mockReturnValue(['Ecuador','Colombia']);
        
        let user = new User();
        user.addFriend('Raul');
        user.addFriend('Soul');
        user.addTrip('Ecuador');
        user.addTrip('Colombia');

        tripService = new TripService();
        const friends = tripService.getTripsByUser(user);
        expect(friends).toHaveLength(2);
    })

});
