// Shaked Benno 207058132
// Itay Gershi 212303028

// Importing ONLY Get for users (us the developers)
import mongoose from "mongoose";
import User from '../models/user.js';

// Retrieves a user by their ID.
const getUser = async (req, res) => {
    try {
        // Search for a user by ID
        const user = await User.findOne({id: req.params.id},
            {_id: 0, __v: 0}, {});
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        res.json(user);
    } catch (err) {
        //Catching if there is any error
        console.error('Error fetching user:', err);
        res.status(500).send('Server Error');
    }
};

const addUserOnce = async () => {
    const dummyUser = new User({
        id: 123123,
        first_name: "moshe",
        last_name: "israeli",
        birthday: "January 10th, 1990"
    });
    try {
        // Clear all old users that might have been added (not through this code)
        const usersID = [];
        await User.find({}, {}, {}).then(users =>
            users.forEach((oldUser) => {
                const userID = oldUser.toString().split("\'")[1];
                usersID.push(userID);
            }));
        for (let id of usersID)
            await User.findByIdAndDelete(mongoose.Types.ObjectId.createFromHexString(id), {});

        // Create the newly testDummy User
        await dummyUser.save();

    } catch (err) {
        //Catching if there is any error
        console.error('Error adding user:', err);
    }
};

export {getUser, addUserOnce};