/*Importar config do servidor*/

var app = require ('./config/server');

/*Parametrizar a porta de escuta*/

app.listen(3002, function () {
    console.log("Servidor OK");
});