const express = require("express");
const Event = require("../models/eventModel");
const requireAuth = require("../middleware/requireAuth");
const {
  createEvent,
  getEventById,
  getAllEvents,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventController");

const router = express.Router();

router.use(requireAuth);

router.get("/all", getAllEvents);

router.get("/:id", getEventById);

router.post("/", createEvent);

router.delete("/:id", deleteEvent);

router.patch("/:id", updateEvent);

module.exports = router;
