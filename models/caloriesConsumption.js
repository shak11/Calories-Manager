// Shaked Benno 207058132
// Itay Gershi 212303028

import mongoose from 'mongoose';

//Defines a Mongoose schema and model for a calorie entity in a MongoDB database
const caloriesConsumptionSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },

        year: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },

        month: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },

        day: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },

        id: {
            type: mongoose.Schema.Types.String,
            required: true,
            unique: true,
        },

        description: {
            type: mongoose.Schema.Types.String,
            required: true,
        },

        category: {
            type: mongoose.Schema.Types.String,
            enum:['breakfast','lunch','dinner','other'],
            required: true,
        },

        amount: {
            type: mongoose.Schema.Types.Number,
            required: true,
        }
    },
    { collection: 'calories' }
);

// Create and export the CalorieConsumption model based on the defined schema
export const CaloriesConsumption = mongoose.model('CaloriesConsumption', caloriesConsumptionSchema);