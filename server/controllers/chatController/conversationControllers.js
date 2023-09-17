const Conversation = require('../../models/chat/Conversation');


//create conversatioon if not exist
const createCononversation=async (req, res) => {
  try {
    const { members } = req.body;

    if (!Array.isArray(members) || members.length !== 2) {
      return res.status(400).json({ error: "Invalid members data" });
    }

    // Check if a conversation with the same members exists
    const existingConversation = await Conversation.findOne({
      members: { $all: members },
    });

    if (existingConversation) {
      return res.status(200).json(existingConversation); // Return the existing conversation
    }

    const newConversation = new Conversation({
      members: members,
    });

    const savedConversation = await newConversation.save();

    res.status(201).json(savedConversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
const getConversationById=async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });

    res.status(200).json(conversation);
    console.log("conversation ==>", conversation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
    console.log("no conversation ==>", err);
  }
}
// Get conversation that includes two userIds

const getConversationIncludTwoUser=async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });

    res.status(200).json(conversation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports={createCononversation,getConversationById,getConversationIncludTwoUser}