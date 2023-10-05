import fs from "fs";

export class CartsManagerFiles{
    constructor(path){
        this.pathFile = path;
    };

    fileExist(){
        return fs.existsSync(this.pathFile);
    };

    async getCarts(){
        try {
            if(this.fileExist()){
                const contenidoString = await fs.promises.readFile(this.pathFile,"utf-8");
                const carts = JSON.parse(contenidoString);
                return carts;
            } else {
                throw new Error("No se pudieron obtener los carritos");
            }
        } catch (error) {
            throw error;
        }
    };

    async createCart(){
        try {
            if(this.fileExist()){
                const contenidoString = await fs.promises.readFile(this.pathFile,"utf-8");
                const carts = JSON.parse(contenidoString);
                const newCart = {
                    id:1,
                    products:[]
                };
                carts.push(newCart);
                await fs.promises.writeFile(this.pathFile,JSON.stringify(carts,null, '\t'));
                return newCart;
            } else {
                throw new Error("No se pudieron obtener los carritos");
            }
        } catch (error) {
            throw error;
        }
    };

    async addProductInCart(cartId, productId) {
        try {
            if (this.fileExist()) {
                const contenido = await fs.promises.readFile(this.filePath, "utf-8");
                const carts = JSON.parse(contenido);
                const cart = carts.find((item) => item.idCart === cartId);
                if (cart) {
                    const existingProduct = cart.products.find((product) => product.idProduct === productId);
                    if (existingProduct) {
                        existingProduct.quantity += 1;
                        console.log("Se aumentó en 1 la cantidad");
                    } else {
                        const newProduct = {
                            idProduct: productId,
                            quantity: 1,
                        };
                        cart.products.push(newProduct);
                    }
                    await fs.promises.writeFile(this.filePath, JSON.stringify(carts, null, '\t'));
                    return `Se agregó el producto al carrito ${cartId}`;
                } else {
                    return `No se encontró el carrito con el ID ${cartId}`;
                }
            } else {
                throw new Error("No se pudo agregar el producto al carrito");
            }
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    };   


    async getCartById(idCart){
        try {
            if(this.fileExist()){
                const contenido = await fs.promises.readFile(this.filePath,"utf-8");
                const contenidoJsonEnString = JSON.parse(contenido);
                const idExists = contenidoJsonEnString.find((item) => item.idCart === idCart);
                if(idExists){
                    return `${JSON.stringify(idExists, null, 2)}`;
                } else {
                    return `Not Found`;
                };
            };
        } catch (error) {
            console.log(error.message);
            throw error;
        };
    };
};