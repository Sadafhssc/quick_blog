import mongoose from "mongoose";
import dns from 'dns';
   dns.setServers(['8.8.8.8', '8.8.4.4']);
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected");
        console.log("Database:", connection.connection.name);

    } catch(error) {
        console.log("MongoDB Error:", error.message);
    }
};

export default connectDB;
