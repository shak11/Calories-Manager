// Shaked Benno 207058132
// Itay Gershy 123456789

// Importing ONLY Get for users (us the developers)
import User from '../models/user.js';
import mongoose from "mongoose";

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
        // Search for a specific user by ID
        // let user = await User.findOne({id: testUser.id}, {}, {});
        // if (user) {
        //     // Clean the data to get the _id of the document
        //     let userID = user.toString().split("\'")[1];
        //     // Remove this document
        //     await User.findByIdAndDelete(mongoose.Types.ObjectId.createFromHexString(userID), {})
        // }

        // Clear all old users that might have been added (not through this code)
        const usersID = [];
        await User.find({}).then(users =>
            users.forEach((oldUser) => {
            const userID = oldUser.toString().split("\'")[1];
            usersID.push(userID);
        }));
        for (let id of usersID) {
            await User.findByIdAndDelete(mongoose.Types.ObjectId.createFromHexString(id), {});
        }
        // Create the newly testDummy User
        await dummyUser.save();

    } catch (err) {
        //Catching if there is any error
        console.error('Error adding user:', err);
    }
};

export {getUser, addUserOnce};