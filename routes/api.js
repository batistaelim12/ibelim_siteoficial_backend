module.exports = function (app) {
    app.get('/api/:entity', app.controllers.api.listarTodos);
    app.get('/api/:entity/:id', app.controllers.api.obter);
    app.post('/api/:entity', app.controllers.api.criar);
    app.put('/api/:entity/:id', app.controllers.api.atualizar);
    app.delete('/api/:entity/:id', app.controllers.api.excluir);
};