// Shaked Benno 207058132
// Itay Gershy 123456789

//Importing express.Mongo and the REST API
import express from "express"
import mongoose from "mongoose"
import CaloriesConsumption from './routes/caloriesConsumption.js';
import Users from './routes/users.js';
import About from './routes/about.js'

//Basic Setters
const app = express();
const PORT = 27100;
const MongoURL = "localhost"

// Parse JSON request bodies
app.use(express.json());

// Connecting to MongoDB
mongoose.connect(MongoURL).then(() => {
  console.log("Database connected successfully.");
  // Starting the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => console.log(error));

// Routes
app.use('/', About);
app.use('/', Users);
app.use('/', CaloriesConsumption);
