import { Router } from "express";
import { usersModel } from "../mongo/models/users.models.js";

const router = Router();

router.post("/signup", async(req, res) => {
    try {
        const signupForm = req.body;
        const result = await usersModel.create(signupForm);
        if (result.email === "adminCoder@coder.com" && result.password === "adminCod3r123") {
            const userChangeRole = await usersModel.findOneAndUpdate({email: "adminCoder@coder.com"}, {role:"admin"}, {new: true});
            console.log(userChangeRole);
        }
        res.render("loginView", {message: "Usuario creado correctamente"})
    } catch (error) {
        res.render("signupView",{error: "No se pudo registrar el usuario"});
    }
});

router.post("/login", async (req, res) => {
    try {
        const loginForm = req.body;
        const user = await usersModel.findOne({ email: loginForm.email });
        if (!user) {
            return res.render("loginView", { error: "El usuario no existe" });
        }
        if (user.password !== loginForm.password) {
            return res.render("loginView", { error: "Credenciales invalidas" });
        }
        req.session.email = user.email;
        const message = `Bienvenido ${req.session.email}`;
        res.redirect(`/?message=${encodeURIComponent(message)}`);
    } catch (error) {
        console.error(error.message);   
        res.render("loginView", { error: "No se pudo iniciar Sesión" });
    }
});


router.get("/logout", async(req,res)=>{
    try {
        req.session.destroy(err=>{
            if(err) return res.render("profileView",{error:"Error al cerrar la sesion"});
            res.redirect("/login");
        })
    } catch (error) {
        res.render("signupView",{error:"No se pudo registrar el usuario"});
    }
});

export { router as sessionsRouter};