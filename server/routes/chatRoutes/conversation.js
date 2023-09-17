const router = require("express").Router();
const conversationController=require('../../controllers/chatController/conversationControllers')
// Create a new conversation
router.post('/',conversationController.createCononversation
 );


// Get conversations of a user by userId
router.get("/:userId", conversationController.getConversationById
);


router.get("/:firstUserId/:secondUserId",conversationController.getConversationIncludTwoUser );

module.exports = router;
