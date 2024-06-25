import mongoose from "mongoose";

const connectToMongodb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoApp');
        console.log('Connected to mongodb!')
    } catch (error) {
        console.log('error connecting mongodb', error)
    }
}

export default connectToMongodb