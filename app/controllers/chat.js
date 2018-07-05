module.exports.iniciaChat = function (application, req, res) {

    var dadosForm = req.body;

    req.assert('apelido', 'Apelido não pode ser vazio').notEmpty();
    req.assert('apelido', 'Apelido deve ter entre 3 a 15 caracteres ').len(3, 15);

    var erros = req.validationErrors();

    if(erros){
        res.render("index", {
            validacao : erros
        });
        return
    }

    res.render("chat");
};