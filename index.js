// Shaked Benno 207058132
// Itay Gershy 123456789

//Importing express.Mongo and the REST API
import express  from "express";
import mongoose  from "mongoose";

import CaloriesConsumption from './routes/caloriesConsumption.js';
import Users from './routes/users.js';
import About from './routes/about.js'
import {addUserOnce} from "./controller/userController.js";
import {cleanOldCalories} from "./controller/caloriesController.js";


//Basic Setters
const app = express();
const PORT = 8080;
// const MongoDBURL = "mongodb+srv://<username>:<password>@beyondthebasics.abcde.mongodb.net/test"
const MongoDBURL = "mongodb://localhost:27017/Boomer"
console.log(MongoDBURL)
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
