const express = require("express");
const Workout = require("../models/workoutModel");
const requireAuth = require("../middleware/requireAuth");
const {
  createWorkout,
  getWorkoutById,
  getAllWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

router.use(requireAuth);

router.get("/", getAllWorkouts);

router.get("/:id", getWorkoutById);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
