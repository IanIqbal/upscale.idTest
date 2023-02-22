
const errorHandler = (err,req,res,next)=>{
    console.log(err);
    let status = 500
    let message = "Internal Server Error"
    switch (err.name) {
        case "SequelizeValidationError":
            status = 400
            message = err.errors[0].message
            break;
        
        case "not found":
            status = 404
            message = "id not found"
            break;

        case "SequelizeDatabaseError":
            status = 400
            message = "isDone status must be boolean"
        default:
            break;
    }

    res.status(status).json({message})
}

module.exports = errorHandler