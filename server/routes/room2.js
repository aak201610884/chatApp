const express = require('express');
const router = express.Router();
const messageController=require


// Create a new message
router.post('/createMessage',
);

// Get all messages
router.get('/getAllMessages', 
);

// Get a message by ID
router.get('/getMessageById/:id',
);



// Update a message by ID
router.put('/updateMessage/:id', 
);

// Delete a message by ID
router.delete('/deleteMessage/:id',
);

router.get('/getAllMessagesByRoom/:roomId', 
);

module.exports = router;
