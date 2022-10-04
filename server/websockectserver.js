// Presenta el módulo de servicio websocket y luego introduce http, porque http es necesario para soporte

WebSocketServer = require("websocket").server;
http = require("http");

// Crear servidor
server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  response.messages(404);
  response.end();
});

//Monitor
server.listen(3001, function () {
  console.log(new Date() + " Server is listening on port 3001");
});


// Crear servidor WebSocket
wsServer = new WebSocketServer({
  httpServer: server,
});

// WebSocket establece una conexión
wsServer.on("request", function (request) {

  // La conexión actual usa un sub-protocolo
  connection = request.accept(null, request.origin);
  console.log(new Date() + "Conexión establecida");
  
  // Supervisar la conexión actual Al enviar un mensaje a supervisar, el tipo de juicio es utf8 y binario binario
  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received Message: " + message.utf8Data);
      connection.sendUTF(message.utf8Data);
    } else if (message.type === "binary") {
      console.log(
        "Received Binary Message of " + message.binaryData.length + " bytes"
      );
      connection.sendBytes(message.binaryData);
    }
  });
  // Monitor activado cuando la conexión actual está cerrada
  connection.on("close", function (reasonCode, description) {
    console.log(
      new Date() + " Peer " + connection.remoteAddress + "Desconectar"
    );
  });
});
