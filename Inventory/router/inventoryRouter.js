const express = require("express")

const router = new express.Router()

const itemController = require("../controller/itemController");
const manufacturerController = require("../controller/manufacturerController");
const categoriesController = require("../controller/categoriesController")
const brandController = require('../controller/brandController')
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

//category
router.post('/addCategory', categoriesController.addCategory)
router.get('/getAllCategories' , categoriesController.getAllCategories)
router.get('/getACategory/:id' , categoriesController.getACategory)
router.put("/updateCategory/:id" , categoriesController.updateCategory)
router.delete("/deleteCategory/:id", categoriesController.deleteCategory)

//brand
router.post('/addBrand', brandController.addBrand);
router.get('/getAllBrands', brandController.getAllBrands);
router.get('/getBrand/:id', brandController.getABrand);
router.put('/updateBrand/:id', brandController.updateBrand);
router.delete('/deleteBrand/:id', brandController.deleteBrand);


module.exports = router