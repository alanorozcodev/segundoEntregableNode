import { Router } from "express";
import { productsService } from "../dao/index.js";

const router = Router();

// Mostrar los productos
router.get("/", async (req,res) =>{
    try {
        const result = await productsService.getProducts();
        res.json({status: "success", data:result});
    } catch (error) {
        res.json({status: "error", message:error.message});
    }
});

// Mostrar el producto por Id
router.get("/:pid", async (req,res) =>{
    try {
        const id = req.params.pid;
        const result = await productsService.getProductById(id);
        res.json({status: "success", data:result});
    } catch (error) {
        res.json({status: "error", message:error.message});
    }
});

// Crear los productos
router.post("/", async (req,res) =>{
    try {
        const product = req.body;
        const result = await productsService.createProduct(product);
        res.json({status: "success", data:result});
    } catch (error) {
        res.json({status: "error", message:error.message});
    }
});

// Actualizar los productos
router.put("/:productId", async (req,res) =>{
    try {
        const product = req.body;
        const productId = req.params.productId;
        const result = await productsService.updateProduct(productId,product);
        res.json({status: "success", data:result});
    } catch (error) {
        res.json({status: "error", message:error.message});
    }
});

//Borrar los productos por Id
router.delete("/:productId", async (req,res) =>{
    try {
        const productId = req.params.productId;
        const result = await productsService.deleteProduct(productId);
        res.json({status: "success", data:result});
    } catch (error) {
        res.json({status: "error", message:error.message});
    }
});



export { router as productsRouter};

