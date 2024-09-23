// Itay Gershi 212303028
// Shaked Benno 207058132

//Importing express.Mongo and the REST API
import express  from "express";
import mongoose  from "mongoose";

import About from './routes/about.js';
import Users from './routes/users.js';
import CaloriesConsumption from './routes/caloriesConsumption.js';

import {addUserOnce} from "./controller/userController.js";
import {cleanOldCalories} from "./controller/caloriesController.js";


//Basic Setters
const app = express();
const PORT = 8080;
const MongoDBURL = "mongodb+srv://HIT:1234@caloriesmanager.sjxpw.mongodb.net/Calories"
// Parse JSON request bodies
app.use(express.json());

// Connecting to MongoDB
mongoose.connect(MongoDBURL).then(() => {
  console.log("Database connected successfully.");
  // Starting the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => console.log(error.toString() + "\r\nMongoDB server Connection Failed!"));

// Add fictional user to DB and removes old one
await addUserOnce();

// Remove old data on old Calories
await cleanOldCalories();
// Add functions to remove previous data and add user



// Routes
app.use('/', About);
app.use('/', Users);
app.use('/', CaloriesConsumption);
