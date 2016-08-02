module.exports.restrict = function(req, res, next) {
  	res.locals.nomeUsuario = "";
  	res.locals.foto = "";
  	res.locals.tipoUsuario = "";
  	res.locals.nomePapel = "";  
  /*if (req.session.usuario) {*/    
    next();
  /*} else {
    req.session.error = 'Usuário não autenticado!';
    res.redirect('/login');
  }*/
};

module.exports.freeAccess = function (req, res, next) {
    next();
};

module.exports.apiAccess = function(req, res, next){

};
