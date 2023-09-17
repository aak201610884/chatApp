const express = require("express");
const router = express.Router();
const roomController = require("../../controllers/chatController/roomController");

// Create a new room
router.post("/", roomController.createRoom);

// Get all active rooms
router.get("/getActiveRooms", roomController.getActiveRooms);

// Get all rooms
router.get("/getAllRooms", roomController.getAllRooms);

// Get a room by ID
router.get("/:id", roomController.getRoomById);

// Update a room by ID
router.put("/:id", roomController.updateRoom);

// Delete a room by ID
router.delete("/:id", roomController.deleteRoom);
// Create a new route for adding participants to a room
router.post("/addParticipant/:roomId", roomController.addParticipant);

module.exports = router;
