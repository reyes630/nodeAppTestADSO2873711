// Creamos el router para poder usar los verbos HTTP
const {Router}= require('express');
// Incluimos nuestro controlador de usuario
const categoryController = require('../../controllers/categoryController');

const router = Router();// Llamamos al método Router de Express
// req => request => En request llegan los datos del body
// res => response => Se envian los datos hacia al cliente

router.get("/", categoryController.getAllCategories);

router.get('/:categoryId', categoryController.getCategory);

router.post('/', categoryController.createCategory);

router.put('/:categoryId', categoryController.updateCategory)

router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;