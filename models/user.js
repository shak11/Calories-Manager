// Shaked Benno 207058132
// Itay Gershy 123456789

import mongoose from 'mongoose';

//Defines a Mongoose schema and model for a user entity in a MongoDB database
const userSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.Number,
            required: true,
            unique: true,
        },
        first_name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        last_name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        birthday: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
    },
    { collection: 'users' }
);

// Create and export the User model based on the defined schema
const user = mongoose.model('User', userSchema);

// Exporting the user model
export default user;
