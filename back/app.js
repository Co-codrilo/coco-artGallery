const express = require("express");
const app = express();
const errorMiddleware = require('./middleware/errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require("path")

//Configurar un archivo file
if(process.env.NODE_ENV !== "PRODUCTION") require("dotenv").config({path: 'back/config/config.env'})

//Uso de constantes importadas
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(fileUpload());

if(process.env.NODE_ENV === "PRODUCTION"){
    app.use(express.static(path.join(__dirname, '../front/build')))

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../front/build/index.html'))
    })
}

//Importar rutas
const productos = require('./routes/products')
const usuarios = require('./routes/auth')
const ordenes = require('./routes/orders')

app.use('/api', productos) //Sujeto a decision (ruta del navegador)
app.use('/api', usuarios)
app.use('/api', ordenes)

//Middleweres para manejar errores 
app.use(errorMiddleware)

module.exports = app