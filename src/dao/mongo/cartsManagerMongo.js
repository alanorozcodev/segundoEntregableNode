import { cartsModel } from "./models/carts.model.js";

export class CartsManagerMongo{
    constructor(){
        this.model = cartsModel;
    };

    //Crear un carrito
    async createCart(cartInfo){
        try {
            const result = await this.model.create(cartInfo);
            return result;
        } catch (error) {
            console.log("cartInfo",error.message);
            throw new Error("No se pudo crear el carrito");
        }
    };

    //Obtener un listado de los carritos
    async getCarts(){
        try {
            const result = await this.model.find();
            return result;
        } catch (error) {
            console.log("getCarts",error.message);
            throw new Error("No se pudo obtener el listado de carritos");
        }
    };

     //Obtener un carrito por Id
    async getCarttById(cartId){
        try {
            const result = await this.model.findById(cartId);
            return result;
        } catch (error) {
            console.log("getCarttById",error.message);
            throw new Error("No se pudo obtener el carrito por Id");
        }
    };

    //Agregar un producto a un carrito
    async addProduct(cartId, productId){
        try {
            const result = await this.model.findByIdAndUpdate(cartId,productId,{new:true});
            if(!result){
                throw new Error("No se pudo encontrar el carrito a actualizar");
            }
            return result;
        } catch (error) {
            console.log("updateProduct",error.message);
            throw new Error("No se pudo actualizar el carrito");
        }
    };

   

    //Borrar un carrito por Id
    async deleteCart(deleteCartId) {
        try {
            const result = await this.model.findByIdAndDelete(deleteCartId);
            if(!result){
                throw new Error("No se pudo encontrar el carrito a eliminar");
            }
            return result;
        } catch (error) {
            console.log("deleteCart",error.message);
            throw   new Error("No se pudo eliminar el carrito");
        }
    };
};

    