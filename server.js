const app = require('./app');

const dotenv = require('dotenv');
const connectDb = require('./config/database')


// Handling Uncaught Exception
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
})

//config
dotenv.config({path:"backend/config/config.env"});

//Connecting to db
connectDb()

const server = app.listen(process.env.REACT_APP_PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.REACT_APP_PORT}`)
})


// Unhandled Promise Rejections
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the Server due to unhandled Promise Rejection")

    server.close(()=>{
        process.exit(1)
    })
})