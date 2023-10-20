import { Router } from "express";

const router = Router();

//vistas de handlebars
router.get("/", (req,res)=>{
    res.render("home");
});
router.get("/chat", (req,res)=>{
    res.render("chat");
});


router.get("/signup", (req, res) => {
    const userEmail = req.session.email;
    userEmail ? res.render("profileView", {message: "Ya estas registrado", userEmail}) : res.render("signupView");
});

router.get("/login", (req, res) => {
    const userEmail = req.session.email;
    userEmail ? res.render("profileView", {message: "Ya iniciaste sesión", userEmail}) : res.render("loginView");
});

router.get("/profile", (req, res) => {
    const userEmail = req.session.email;
    userEmail ? res.render("profileView", {userEmail}) : res.redirect("/login");
});


export { router as viewsRouter};