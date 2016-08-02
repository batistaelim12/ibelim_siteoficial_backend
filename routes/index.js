var express = require('express');
var router = express.Router();
var auth = require('./auth.js');

function obterQuantidadeMembros(){
	return 112;
}

function obterQuantidadeCelulas(){
	return 18;
}

function obterQuantidadeDiscipulos(){
	return 12;
}

function obterQuantidadeConsolidacoes(){
	return 189;

}

/* GET home page. */
module.exports = function (app) {
    app.get('/', auth.restrict, function(req, res) {
    res.render('index', { 
            title: 'Dashboard', 
            quantidadeMembros: obterQuantidadeMembros(),
            quantidadeCelulas: obterQuantidadeCelulas(),
            quantidadeDiscipulos: obterQuantidadeDiscipulos(),
            quantidadeConsolidacoes: obterQuantidadeConsolidacoes(),
            subTitulo: 'Painel de Controle'
        });
    });
}