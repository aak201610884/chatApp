const router=require("express").Router()
const messageController=require('../../controllers/chatController/messageController')

router.post('/create',messageController.createMessage)


router.get('/all',messageController.getAllMessages)
router.post('/:id',messageController.getMessageById)
router.put('/:id',messageController.updateMessage)

router.delete('/:id',messageController.deletMessage)

router.get('RoomId/:id',messageController.getAllMessageByRoomId)





module.exports=router;