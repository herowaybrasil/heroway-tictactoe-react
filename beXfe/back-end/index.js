const http = require('http');

const onRequest = (request, response) => {
  if (request.url === '/') {
    response.writeHead(200);
    response.end('O SISTEMA ESTÁ FUNCIONANDO!');
  }

  if (request.url.includes('/login')) {
    response.writeHead(200);

    const split = request.url.split('?');
    const isAdmin = split[1];

    if (isAdmin === 'admin=true') { // alterar para password=heroway
      response.end('Ola Administrador');
    } else {
      response.end('Ola Usuario');
    }
  }

  response.writeHead(404);
  response.end('API NAO ENCONTRADA');
};

const server = http.createServer(onRequest);
server.listen(8080, () => {
  console.log('Servidor Funcionando! Acesse: http://localhost:8080');
});