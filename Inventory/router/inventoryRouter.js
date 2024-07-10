const express = require("express")

const router = new express.Router()

<<<<<<< HEAD
const itemController = require("../controller/itemController")

// Item
router.post('/item/add', itemController.addItem);
router.get('/item/get-all', itemController.getAllItem);
router.get('/item/get/:id', itemController.getAItem)
router.put('/item/update/:id',itemController.updateItem)
router.delete('/item/delete/:id',itemController.deleteItem)
=======
>>>>>>> d9002ce8a4237c5bb8f605d02048c64475165e4b


module.exports = router