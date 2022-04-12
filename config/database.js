const mongoose = require('mongoose');

const connectDb = ()=> {
    mongoose.connect(process.env.REACT_APP_DB_URI,{useNewUrlParser: true, useUnifiedTopology:true}).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`)
    })
    
}

module.exports = connectDb

// REACT_APP_DB_URI = 'mongodb+srv://ecommerce:ecommerce@ecommerce.zoilg.mongodb.net/ecommerce?retryWrites=true&w=majority'

// REACT_APP_DB_URI = mongodb://localhost:27017/yamunabazaar