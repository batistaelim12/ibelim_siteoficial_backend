var express = require('express');
var app = express();
var DAO = require('./../dal/dao.js');

exports.cadastro = function (req, res, next) {

    new DAO("DadosGerais", req).list(function (err, conteudos) {
        if(err)
          throw err;
        res.render('dadosgerais', { item: conteudos[0], title: "Atualizar Dados Gerais do Site"  });
    });
}

exports.atualizar = function (req, res, next) {
    var dao = new DAO("dadosgerais", req);

    dao.list(function (err, conteudos) {
        if(err)
            throw err;

        var obj = conteudos[0];
        obj.logotipo       = req.body.logotipo;
        obj.linkpregacoes  = req.body.linkpregacoes;
        obj.linkradio      = req.body.linkradio;
        obj.latitude       = req.body.latitude;
        obj.longitude      = req.body.longitude;
        obj.linkfacebook   = req.body.linkfacebook;
        obj.linkyoutube    = req.body.linkyoutube;
        obj.linkinstagram  = req.body.linkinstagram;

        dao.save(obj, function(err, result){
            res.render('dadosgerais', { item: obj, success: "Dados do Site atualizados!", title: "Atualizar Dados Gerais do Site" });
        });     
    });
};