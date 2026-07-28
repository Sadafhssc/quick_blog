import mongoose from "mongoose";

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
