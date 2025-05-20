const express = require('express');// se llama la depemdencia del framwork express
const app = express();//cremos la instancia de express
const morgan = require('morgan');//se llama la dependencia de morgan para el logueo de las peticiones
const bodyParser = require('body-parser');//se llama la dependencia de body-parser para el parseo de los datos

app.set('port',process.env.PORT || 4000)

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));//prtmite recibir datos del formulario
app.use(bodyParser.json());//permite recicbir datos en formato json

//routes
//Rutas de Usuarios para la V1 de la API 
app.use('/api/v1/users', require('./api/v1/user.routes'));//se llama la ruta de la api

//rutas de la API
// app.get('/', (req, res) => {
//     res.send({
//         'status': 200,
//         'message': 'Esta API es de prueba, Exitoso!',
//     })
// });
// app.get('/saludos', (req, res) => {
//     res.send({
//         'status': 200,
//         'message': 'Hola, Analisis Y Desarrollo de Software'
//     })
// });

// app.post('/newUserTesT', (req, res) => {
//     //  console.log(req);
//     //console.log(req.body);
//     //let name = req.body.name;
//     //const email = req.body.email;
//     //const telefono = req.body.telefono;
//     //const direccion = req.body.direccion;
//     //const emprea = req.body.empresa;
//     const{name, email, telefono, direccion, empresa} = req.body;
//     console.log(`nombre: ${name}`);
//     console.log(`email: ${email}`);
//     console.log(`telefono: ${telefono}`);
//     console.log(`direccion: ${direccion}`);
//     console.log(`empresa: ${empresa}`);
//     res.send({
//         "status": 201,
//         "message": "Usuario creado exitosamente",
//     });
// });



// Se inicializa el servidor
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
})