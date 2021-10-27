const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose
          .connect(
            process.env.MONGO_URI
          )
          console.log(`MongoDB successfully connected: ${conn.connection.host}`)
                  
    } catch (err) {
        console.error(`Error: ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;
