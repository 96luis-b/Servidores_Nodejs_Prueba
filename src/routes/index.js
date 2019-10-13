const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', { title:'First Website'});  // se utiliza para renderizar el archivo del motor de plantillas y procesar codigo
   // res.render('index.html');
});
router.get('/contact', (req, res)=>{
    res.render('contact', { title:'Contact Page'});  // se utiliza para renderizar el archivo del motor de plantillas y procesar codigo

});

module.exports = router;
