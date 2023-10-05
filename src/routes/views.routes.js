import { Router } from "express";

const router = Router();

//vistas de handlebars
router.get("/", (req,res)=>{
    res.render("home");
});
router.get("/chat", (req,res)=>{
    res.render("chat");
});


export { router as viewsRouter};