import { Router } from "express";
import { cartsService } from "../dao/index.js";

const router = Router();

// Mostrar los Carritos
router.get("/", async(req,res)=>{
    try {
        const carts = await cartsService.getCarts();
        res.json({status: "success", data:carts});
    } catch (error) {
        res.json({status: "error", error:error.message});
    }
});

// Mostrar el carrito por Id
router.get("/:cid", async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const carts = await cartsService.getCarttById(cartId);
        res.json({status: "success", data:carts});
    } catch (error) {
        res.json({status: "error", error:error.message});
    }
});

// Crear Carrito
router.post("/", async (req, res) => {
    try {
        const cartCreate = await cartsService.createCart();
        res.json({status: "success", data:cartCreate})

    } catch (error) {
        res.json({status: "error", error:error.message});
    }
});

//Borrar los carritos por Id
router.delete("/:cartId", async (req,res) =>{
    try {
        const productId = req.params.productId;
        const result = await productsService.deleteProduct(productId);
        res.json({status: "success", data:result});
    } catch (error) {
        res.json({status: "error", message:error.message});
    }
});


