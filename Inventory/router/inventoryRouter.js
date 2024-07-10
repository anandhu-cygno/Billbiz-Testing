const express = require("express")

const router = new express.Router()

const itemController = require("../controller/itemController")

// Item
router.post('/item/add', itemController.addItem);
router.get('/item/get-all', itemController.getAllItem);
router.get('/item/get/:id', itemController.getAItem)
router.put('/item/update/:id',itemController.updateItem)
router.delete('/item/delete/:id',itemController.deleteItem)


module.exports = router