// Shaked Benno 207058132
// Itay Gershi 212303028

// import Express and GET,POST API for calories
import express from "express";
import {addCalories, getReport} from '../controller/caloriesController.js';

const router = express.Router();

// Add calories data to mongoDB
router.post('/addcalories', addCalories);

// Fetch calorie reports from mongoDB
router.get('/report', getReport);

export default router;