const Room = require('../../models/chat/roomSchema');
const User = require('../../models/user/userModel');
const createRoom= async (req, res) => {
  try {
    const { roomName, roomPicture, roomAdmin, participants, activeRoom } = req.body;
    const newRoom = new Room({
      roomName,
      roomPicture,
      roomAdmin,
      participants,
      activeRoom,
    });
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).json({ error: 'Failed to create room' });
  }
}

const getAllRooms=async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
}

const getRoomById=async (req, res) => {
  try {
    const roomId = req.params.id;
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    console.error('Error fetching room by ID:', error);
    res.status(500).json({ error: 'Failed to fetch room by ID' });
  }
}
const updateRoom=async (req, res) => {
  try {
    const roomId = req.params.id;
    const updateData = req.body;
    const updatedRoom = await Room.findByIdAndUpdate(roomId, updateData, { new: true });
    if (!updatedRoom) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error('Error updating room:', error);
    res.status(500).json({ error: 'Failed to update room' });
  }
}
const deleteRoom=async (req, res) => {
  try {
    const roomId = req.params.id;
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    if (!deletedRoom) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    console.error('Error deleting room:', error);
    res.status(500).json({ error: 'Failed to delete room' });
  }
}
const addParticipant=async (req, res) => {
  try {
    const { roomId } = req.params;
    const { participantId } = req.body;

    // Find the room by its ID
    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    // Add the new participant to the room's participants array
    room.participants.push(participantId);

    // Save the updated room
    const updatedRoom = await room.save();

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error('Error adding participant to room:', error);
    res.status(500).json({ error: 'Failed to add participant to room' });
  }
}
const getActiveRooms=async (req, res) => {
  try {
    // Find all rooms where activeRoom is true
    const activeRooms = await Room.find({ activeRoom: true });

    res.status(200).json(activeRooms);
  } catch (error) {
    console.error("Error fetching active rooms:", error);
    res.status(500).json({ error: "Failed to fetch active rooms" });
  }
}


module.exports={createRoom,getAllRooms,getRoomById,updateRoom,deleteRoom,addParticipant,getActiveRooms}