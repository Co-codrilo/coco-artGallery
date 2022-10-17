const producto=require("../models/productosModel");
const fetch=(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación de require

//Ver la lista de productos
exports.getProducts=async(req,res,next) =>{
    const productos=await producto.find();
    res.status(200).json({
        success:true,
        cantidad:productos.length,
        productos
    })
}
//Ver la lista de productos


//Ver un producto por ID
exports.getProductById=async(req,res,next)=>{
    const product=await producto.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:'No encontramos ese producto'
        })
    }
    res.status(200).json({
        success:true,
        message: 'Aqui debajo encuentras información sobre tu producto',
        product
    })
}
//Ver un producto por ID 


//Update un producto
exports.updateProduct=async(req,res,next)=>{
    let product=await producto.findById(req.params.id); //Variable de tipo modificable
    if(!product){ //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message:'No encontramos ese producto'
        })
    }
    //Si el objeto existe, entonces ejecuto la actualización
    product=await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto se actualizó
    res.status(200).json({
        success:true,
        message: 'producto actualizado correctamante',
        product
    })
}
//Update un producto 


//Eliminar producto
exports.deleteProduct=async(req,res,next)=>{
    const product=await producto.findById(req.params.id); //Variable de tipo modificable
    if(!product){ //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({ //Si el objeto no existe, return termina el método
            success:false,
            message:'No encontramos ese producto'
        })
    }
    await product.remove(); //Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:('Producto eliminado correctamante')
    })
}
//Eliminar producto 


//Crear nuevo producto /api/producto/nuevo
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}
//Crear nuevo producto /api/producto/nuevo



//MÉTODO FETCH
//Ver todos los productos
function verProductos() {
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
/* verProductos(); //Llamamos al método creado para probar la consulta */
//Ver todos los productos

//Ver por id
function verProductoPorID(id) {
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
/* verProductoPorID('634b3353edf7ff8bfd384f21'); //Probamos el método con un id */
//Ver por id
//MÉTODO FETCH