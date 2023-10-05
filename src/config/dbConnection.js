import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://alanorozco43:xPk2nSeZl1Xf4IhN@cluster0.8x3w7wi.mongodb.net/ecommerceDB?retryWrites=true&w=majority');
        console.log("Base de datos conectada correctamente");
    } catch (error) {
        console.log(`Hubo un error conectando la base de datos: ${error.message}`);
    }
};