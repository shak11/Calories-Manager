// Shaked Benno 207058132
// Itay Gershi 212303028

// Import Express and GET API for about (Info of the devs)
import express from 'express';
// const express = require('express');
import {getStudents} from "../controller/aboutController.js";

const router = express.Router();

// Fetch Students on this project
router.get('/about', getStudents);

export default router;