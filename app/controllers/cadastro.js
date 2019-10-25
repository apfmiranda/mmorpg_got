module.exports.cadastro = function(application, req, res) {
    res.render('cadastro');
}

module.exports.cadastrar = function(application, req, res) {
    var dadosForm = req.body;

    req.assert('nome', 'Não pode ser vazio').notEmpty();
    req.assert('usuario', 'Não pode ser vazio').notEmpty();
    req.assert('senha', 'Não pode ser vazio').notEmpty();
    req.assert('casa', 'Não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', {validacao: erros});
        return;
    }

    res.send('Podemos cadastrar');
}