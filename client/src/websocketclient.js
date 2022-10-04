import WebSocket from 'wss';

 // Crear objeto websocket//
    const ws = new WebSocket('wss://localhost:3001');
    ws.send("Mi mensaje");

    // Escucha para establecer una conexión
    ws.onopen=function(){
        console.log('conexión exitosa');
     
    }
    
//Continuar trabajando en la siguiente fase para conectar  el webclient y el webserver//