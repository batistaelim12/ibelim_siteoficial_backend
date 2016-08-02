var auth = require('./auth.js');

module.exports = function (app) {
    app.get('/dadosgerais', auth.restrict, app.controllers.dadosgerais.cadastro);
    app.post('/dadosgerais', auth.restrict, app.controllers.dadosgerais.atualizar);
};