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
    const testUser = new User({

        id: 123123,
        first_name: "moshe",
        last_name: "israeli",
        birthday: "January 10th, 1990"
    });
    try {
        // Search for a user by ID
        let user = await User.findOne({id: testUser.id}, {}, {});
        if (user) {
            // Clean the data to get the _id of the document
            let userID = user.toString().split("\'")[1];
            // Remove this document
            await User.findByIdAndDelete(mongoose.Types.ObjectId.createFromHexString(userID), {})
        }
        // Create the newly testDummy User
        await testUser.save();

    } catch (err) {
        //Catching if there is any error
        console.error('Error adding user:', err);
    }
};

export {getUser, addUserOnce};