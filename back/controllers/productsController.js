const producto=require("../models/productosModel");

//Ver la lista de productos
exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        success:true,
        messaje:'En esta ruta usted va a poder ver todos los porductos'
    })
}
//Ver la lista de productos


//Crear nuevo producto /api/producto/nuevo
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}
//Crear nuevo producto /api/producto/nuevo
