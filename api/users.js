/* const { Model, where } = require('sequelize'); */
const db= require('../models');
const {Router} = require('express');
//creamos el router
const router = Router(); //llamamos el metodo Router de express


//req => request => En request llegan los datos del body
//res => response => Se envian los datos hacia el cliente

router.get('/', (req, res) => { 
     res.send({Title: 'Hello ADSO!'});
 });

router.post('/new', async (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try{
        await db.User.create({
            name: name,
            email: email,
            password: password
        });
        res.status(200).send('Usuario creado');
    }catch(error){
         console.error('Error al crear el usuario:', error);
        res.status(400).send('Error al crear el usuario');
    }

});

router.get('/all', async (req, res) => {
    try{
        let users = await db.User.findAll();
        res.status(200).send(users);
    }catch(error){
        res.status(400).send('Error al obtener los usuarios');
    }
});

router.get('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users);
    }catch (error){
        res.status(400).send('Error al obtener el usuario');
    }
});

router.put('/:id', async (req, res) =>{
    try{
        let id = req.params.id;
        let {name, email, password} = req.body;
        await db.User.update(
           {name, email, password},
           {
            where:{
                id: id,
            }   
        }
    );
    res.status(200).send('Usuario actualizado');
    }catch(error){
        res.status(400).send('Error al actualizar el usuario');
    }
});

router.delete('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        await db.User.destroy({
            where:{
                id: id,
            }
        });
        res.status(200).send('Usuario eliminado');
    }catch(error){
        res.status(400).send('Error al eliminar el usuario');
    }
});
module.exports = router; //exportamos el router para usarlo en el server