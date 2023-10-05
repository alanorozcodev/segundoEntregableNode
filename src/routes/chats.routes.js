import { Router } from "express";
import { chatService } from "../dao/index.js";

const router = Router();

// Mostrar los mensajes
router.get("/", async (req,res) =>{
    try {
        const chatHistory = await chatService.getMessages();
        res.json({status: "success", data:chatHistory});
    } catch (error) {
        res.json({status: "error", error:error.message});
    }
});


// Agregar los mensajes
router.post("/", async(req,res)=>{
    try {
        const chat = req.body;
        const chatHistory = await chatService.addMessages(chat);
        res.json({status: "success", data:chatHistory});
    } catch (error) {
        res.json({status: "error", error:error.message});
    }
});


export { router as chatRouter};