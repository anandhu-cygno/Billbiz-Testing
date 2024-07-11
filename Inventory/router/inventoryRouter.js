const express = require("express")

const router = new express.Router()

const itemController = require("../controller/itemController");
const manufacturerController = require("../controller/manufacturerController");

// Item
router.post('/item/add', itemController.addItem);
router.get('/item/get-all', itemController.getAllItem);
router.get('/item/get/:id', itemController.getAItem)
router.put('/item/update/:id',itemController.updateItem)
router.delete('/item/delete/:id',itemController.deleteItem)

//manufacturer
router.post('/addManufacturer', manufacturerController.addManufacturer);
router.get('/getAllManufacturer', manufacturerController.getAllManufacturer)
router.get('/getAManufacturer/:id',manufacturerController.getAManufacturer)
router.put('/updateManufacturer/:id', manufacturerController.updateManufacturer)
router.delete('/deleteManufacturer/:id',manufacturerController.deletedManufacturer)


module.exports = router