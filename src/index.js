const express = require("express");
const app = express();
const path = require('path');
//const indexRoutes = require('../routes/index');   es una constante de las rutas


// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, './views'));
 app.engine('html', require('ejs').renderFile);   //esta configuracion sirve para que el motor de plantillas ejs procese directamente los archivos html
    // settings view engine  agregar nuevas funcionalidades
    //      a las ventalas html
//app.set('view engine', 'ejs');

// middlewares

// routes
//app.use(require('./routes/index.js'));


app.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname , '/views/index.html'));   // se utiliza cuando se quiere enviar un archivo html comun
   // res.render('index', { title:'First Website'});  // se utiliza para renderizar el archivo del motor de plantillas y procesar codigo
    res.render('index');
});


// static files
app.use(express.static(path.join(__dirname, 'public')));


// listening the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'));
})

