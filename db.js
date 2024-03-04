const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://user2:123@cluster0.mmb99k4.mongodb.net/Sheycars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose

//mongodb+srv://sathya:sathyapr@cluster0.dkuc0.mongodb.net/sheycars-udemy