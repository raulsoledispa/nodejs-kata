const User = require("../src/User");

const LOGGED_USER = new User();
const GUEST = null;
const BOB = new User();
const PAUL = new User();

describe('User', () => {
    it('should inform when users are not friends',() =>{
        
        let user = new User();

        expect(user.isFriendWith(BOB)).toBeFalsy();

    });

    it('should inform when users are friends',() =>{

        let user = new User();
        user.addFriend(BOB);
        user.addFriend(PAUL);


        expect(user.isFriendWith(BOB)).toBeTruthy();

    });
})