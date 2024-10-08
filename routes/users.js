// Shaked Benno 207058132
// Itay Gershi 212303028

// Import Express and GET API for user (Devs/About)
import express from "express";
import { getUser } from '../controller/userController.js';

const router = express.Router();

router.get('/user/:id', getUser);

export default router;