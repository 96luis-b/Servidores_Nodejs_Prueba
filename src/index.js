const express = require('express');
const app = express();
const path = require('path');
//var os = require('os');
//const indexRoutes = require('../routes/index');   es una constante de las rutas
/*
const fs = require('fs'); // permite trabajar con el sistema de archivos en su computadora. sirve para operaciones de CRUD sobre cualquier archivo
const readline = require('readline');
const {google} = require('googleapis');
//const {OAuth2} = google.auth.OAuth2;
const {OAuth2Client} = require ('google-auth-library');
*/ 

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/youtube-nodejs-quickstart.json
/*
var SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json';
*/
/*
var CLIENT_ID = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var REDIRECT_URL = process.env.REDIRECT_URL;
*/


// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);   //esta configuracion sirve para que el motor de plantillas ejs procese directamente los archivos html
    // settings view engine  agregar nuevas funcionalidades
    //      a las ventalas html
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/index'));

/*
app.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname , '/views/index.html'));   // se utiliza cuando se quiere enviar un archivo html comun
    res.render('index', { title:'First Website'});  // se utiliza para renderizar el archivo del motor de plantillas y procesar codigo

});
*/

// static files
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'));
    /*
    console.log("Platform: " + os.platform());
    console.log(TOKEN_DIR);
    console.log(TOKEN_PATH);
    */
})

