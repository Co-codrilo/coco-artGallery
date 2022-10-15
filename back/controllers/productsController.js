exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        success:true,
        messaje:'En esta ruta usted va a poder ver todos los porductos'
    })
}