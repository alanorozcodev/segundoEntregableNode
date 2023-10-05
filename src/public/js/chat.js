console.log("javascript en el front end");

//Socket del cliente
const socketClient = io();


const userName = document.getElementById("userName");
const inputMsg = document.getElementById("inputMsg");
const sendMsg = document.getElementById("sendMsg");
const chatPanel = document.getElementById("chatPanel");

let user; //Variable de identidad del usuario
Swal.fire({
    title:"Te damos la bienvenida a nuestro chat",
    text: "Por favor, ingresa tu nombre de usuario",
    input: `text`,
    inputValidator: (value) =>{
        return !value && 'Favor de ingresar tu nombre de usuario para continuar'
    },
    allowOutsideClick:false,
    allowEscapeKey:false
}).then((inputValue)=> {
    console.log(inputValue);
    user = inputValue.value;
    userName.innerHTML = user;
    socketClient.emit("authenticated", user);
});

sendMsg.addEventListener("click", ()=>{
    const msg = {user:user, message:inputMsg.value};
    socketClient.emit("msgChat", msg);
    inputMsg.value="";
});

socketClient.on("chatHistory", (dataServer)=>{
    console.log(dataServer);
    let msgElements = "";
    dataServer.forEach(elm=>{
        msgElements += `<p>Usuario: ${elm.user} >>>> ${elm.message} </p>`
    });
    chatPanel.innerHTML = msgElements;
});

socketClient.on("NewUser", (data)=> {
    if(user){
        Swal.fire({
            text: data,
            toast: true,
            position: "top-right"
        });   
    }
});