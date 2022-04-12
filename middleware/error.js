const ErrorHandler = require('../utils/errorHandlers')

module.exports = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong Mongodb ObjectId Error
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    //Mongoose duplicate key error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err= new ErrorHandler(message, 400)
    }
    //Wrong JWT error
    if(err.code === 'JsonWebTokenError'){
        const message = `Json Web Token is invalid, try again`;
        err= new ErrorHandler(message, 400)
    }
    // JWT expired error
    if(err.code === 'TokenExpiredError'){
        const message = `Json Web Token Expired, try again`;
        err= new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}