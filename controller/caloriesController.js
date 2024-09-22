// Shaked Benno 207058132
// Itay Gershy 123456789

//Import Mongo , GET and POST for Calories
import mongoose from 'mongoose';
import { CaloriesConsumption } from "../models/caloriesConsumption.js";
import User from "../models/user.js";

// Add new calorie consumption item
const addCalories = async (req, res) => {
    try {
        // Basic Setters for the scheme
        const { user_id, year, month, day, description, category, amount } = req.body;
        const customId = new mongoose.Types.ObjectId().toString(); // Generate a custom ID
        const newCalorie = new CaloriesConsumption({
            user_id,
            year,
            month,
            day,
            id: customId, // Assign of the custom ID
            description,
            category,
            amount,
        });
        await newCalorie.save();
        res.status(201).json(newCalorie);
    } catch (err) {
        //Catching if there is any error
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Report Generation for a specific user, year, and month
const getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: [],
        };

        const calories = await CaloriesConsumption.find({ user_id, year, month },{},{});
        // Creating an Array for the Calories based on the category
        calories.forEach((CalorieConsumption) => {
            report[CalorieConsumption.category].push({
                day: CalorieConsumption.day,
                description: CalorieConsumption.description,
                amount: CalorieConsumption.amount,
            });
        });

        res.json(report);
    } catch (err) {
        //Catching if there is any error
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Clean old calories
const cleanOldCalories = async () => {
    const caloriesID = [];
    await CaloriesConsumption.find({}).
    then(calories =>
        calories.forEach((oldCalorie) => {
            const calorieID = oldCalorie.toString().split("\'")[1];
            caloriesID.push(calorieID);
        }));
    for (let id of caloriesID) {
        await CaloriesConsumption.findByIdAndDelete(mongoose.Types.ObjectId.createFromHexString(id), {});
    }
}

// Export the functions
export { addCalories, getReport, cleanOldCalories };