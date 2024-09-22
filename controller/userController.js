// Shaked Benno 207058132
// Itay Gershy 123456789

// Importing ONLY Get for users (us the developers)
import User from '../models/user.js';

// Retrieves a user by their ID.
export const getUser = async (req, res) => {
    try {
        // Search for a user by ID
        const user = await User.findOne({id: req.params.id},
            {_id: 0, __v: 0},{});
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
