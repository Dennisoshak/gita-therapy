const Event = require("../models/eventModel");
const mongoose = require("mongoose");

const getAllEvents = async (req, res) => {
  const user_id = req.user._id;
console.log(user_id)
  const events = await Event.find({ user_id }).sort({ createdAt: -1 });
  res.set('Content-Type', 'application/json');
  res.status(200).json(events);
};

const getEventById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No matching event" });
  }
  const event = await Event.findById(id);
  if (!event) {
    return res.status(404).json("No matching event");
  }
  res.status(200).json(event);
};

const createEvent = async (req, res) => {
  const { situation, thoughts, emotion,reaction } = req.body;
  let emptyFields = [];
  if (!situation) emptyFields.push("situation");
  if (!thoughts) emptyFields.push("thoughts");
  if (!emotion) emptyFields.push("emotion");
  if (!reaction) emptyFields.push("reaction");
  if (emptyFields.length > 0)
    return res
      .status(400)
      .json({ message: "Please fill all fields", emptyFields });
      if (emotion<1||emotion>100)   return res
      .status(400)
      .json({ message: "Emotion rate must be between 1 and 100" });

  try {
    const user_id = req.user._id;
    const event = await Event.create({ situation, thoughts, emotion,reaction, user_id });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No matching event" });
  }
  const event = await Event.findOneAndDelete({ _id: id });
  if (!event) {
    return res.status(404).json({ message: "No matching event" });
  }
  res.status(200).json(event);
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No matching event" });
  }
  const event = await Event.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!event) {
    return res.status(404).json({ message: "No matching event" });
  }
  res.status(200).json(event);
};

module.exports = {
  createEvent,
  getEventById,
  getAllEvents,
  updateEvent,
  deleteEvent,
};
