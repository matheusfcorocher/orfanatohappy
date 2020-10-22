//importar dependencias ou pacotes
const express = require('express');
const path = require('path'); // pacote para lidar com diferentes OS e sempre coloca o caminho correto
const pages = require('./pages.js'); // acumula as os diretorios das paginas

//iniciando a biblioteca
const server = express();

server
//utilizar o body da request
    .use(express.urlencoded({ exnteded: true }))
    //utilizando os arquivos estaticos
    .use(express.static('public'))
    //configurar template engine => usada para deixar o html dinamico, se nao for usa react
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    //rotas da aplicacao
    .get('/', pages.index) // chama por referencia
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create_orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500);