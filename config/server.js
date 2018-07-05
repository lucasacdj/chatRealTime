/*Importar o modulo express*/
var express = require("express");

/*Importar o módulo do consign*/
var consign = require("consign");

/*Importar o body-parser*/
var bodyParser = require("body-parser");

/*Importar o express-validator*/
var expressValidator = require("express-validator");

/*Iniciar o objeto do express*/
var app = express();

/*configurar a engine e a views*/
app.set('view engine', 'ejs');
app.set('views','./app/views');

/*configurar o middleware*/
app.use(express.static('./app/public'));

/*configurar o middleware body-parser*/
app.use(bodyParser.urlencoded({
    extended : true
}));

/*configurar o middleware express-validator*/
app.use(expressValidator());

/*efetuar o autoload das rotasa, dos models e dos controllers para o OBJETO APP*/

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/*exportar o objeto app*/
module.exports = app;