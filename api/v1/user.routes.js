const {Router} = require('express');
const router = Router() //creamos instancia del router

const user__controller = require('../../controllers/userController');
const {route} = require('../users')



router.get('/testUserApi', user__controller.testUserApi);
router.get('/', user__controller.getAllUsers);
router.get('/:id', user__controller.getOneUser);
router.post('/', user__controller.createUser);
router.put('/:id' , user__controller.updateUser);
// router.delete('/:id', user__controller.deleteUser);

//Exportar el modulo
module.exports = router;