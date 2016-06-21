var DAO = require('./../dal/dao.js');

exports.listarTodos = function(req, res, next){
  console.log(req);
  new DAO(req.params.entity, req).list(function(err, result){
    if(err)
      throw err;
    res.send(result);
  });
};

exports.obter = function(req, res, next){
  new DAO(req.params.entity, req).get(req.params.id, function(err, result){
    if(err)
      throw err;
    res.send(result);
  });
};

exports.criar = function(req, res, next){
  var obj = req.body;
  new DAO(req.params.entity, req).save(obj, function(err, result){
    if(err)
      throw err;
    res.send(result);
  });
};

exports.atualizar = function(req, res, next){
  var obj = req.body;
  obj.id = req.params.id;
  new DAO(req.params.entity, req).save(obj, function(err, result){
    if(err)
      throw err;
    res.send(result);
  });
};

exports.excluir = function(req, res, next){
  new DAO(req.params.entity, req).remove(req.params.id, function(err, result){
    if(err)
      throw err;
    res.send(result);
  });
};
