/*Importar config do servidor*/

var app = require ('./config/server');

/*Parametrizar a porta de escuta*/

var server = app.listen(3002, function () {
    console.log("Servidor OK");
});

var io = require('socket.io').listen(server);

/*Criando variavel dentro do Objeto do Express , logo ele se encontra no Application*/
app.set("io", io);

/*Criar conexão por WEB Socket*/

io.on('connection', function (socket) {
    console.log("Usuario conectou");
    
    socket.on('disconnect', function () {
       console.log("Usuário desconectou");
    });

    socket.on('msgParaServidor', function (data) {
        /*------------------------ Dialogos ---------------------*/
        socket.emit('msgParaCliente', {
            apelido : data.apelido,
            mensagem : data.mensagem
        });

        socket.broadcast.emit('msgParaCliente', {
            apelido : data.apelido,
            mensagem : data.mensagem
        });

        /*------------------------ Participantes ------------------*/

        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){

            socket.emit('participantesParaCliente', {
                apelido : data.apelido
            });

            socket.broadcast.emit('participantesParaCliente', {
                apelido : data.apelido,
            });
        }

    });
});