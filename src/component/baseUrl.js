import { io } from "socket.io-client";

let baseUrl;
let socket;
if(process.env.NODE_ENV === 'production'){
    baseUrl = 'https://blog-e760.onrender.com'
}
else{
    baseUrl = 'http://localhost:4000'
    socket = io('http://localhost:4000')
}

export {socket};
export default baseUrl