const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://user2:123@cluster0.mmb99k4.mongodb.net/Sheycars', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log('Mongo DB Connection Successful');
    } catch (error) {
        console.error('Mongo DB Connection Error:', error.message);
    }
}

connectDB();

module.exports = mongoose;
