import { chatModel } from "./models/chat.model.js";

export class ChatManagerMongo{
    constructor(){
        this.model = chatModel;
    }

    //Mostrar los mensajes
    async getMessages(){
        try {
            const result = await this.model.find();
            return result;
        } catch (error) {
            console.log("getMessages",error.message);
            throw new Error("No se pudieron obtener los mensajes");
        }
    };

    //Agregar los mensajes
    async addMessages(message){
        try {
            const result = await this.model.create(message);
            return result;
        } catch (error) {
            console.log("addMessages",error.message);
            throw new Error("No se pudo agregar el mensaje");
        }
    };
}