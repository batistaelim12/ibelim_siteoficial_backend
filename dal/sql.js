var method = SQL.prototype;
method.processar = function(table, req){
	var query = "SELECT * FROM " + table;
	var objects = {};
	var result = {};

	if(req && req.query){
		if(req.query.where){
			query = query + " WHERE ";
			result = montarWhere("where", req.query.where);
			query = query + result.query;
			objects = result.objects;
		}

		if(req.query.limit){
			query = query + montarLimite(req.query.limit);
		}

		if(req.query.order){
			query = query + montarOrder(req.query.order);
		}
	}

	result.objects = objects;
	result.query = query;

	return result;
}

function SQL(vtable, vreq){
	this.table = vtable;
	this.req = vreq;
	var result = this.processar(vtable, vreq);
	this.objects = result.objects;
	this.query = result.query;
}

function montarLimite(obj){
	var sql = "";
	if(obj){
		sql = " LIMIT ";

		if(obj.page)
			sql = sql + (obj.page * obj.limit).toString() + ",";

		if(obj.limit)
			sql = sql + obj.limit.toString();
	}

	return sql;
}

function montarWhere(propName, objValue, result, specialConcat, operator, end){
	if(typeof objValue == 'object'){
		var keys = Object.keys(objValue);
		var currentSpecial = specialConcat;
		for(var i = 0; i < keys.length; i++){
			var prop = keys[i];
			var val = objValue[prop];
			
			if(specialConcat == " OR "){
				if(i == 0 && prop[0] != "$"){
					if(result && result.query && result.query != '')
					{
						currentSpecial = " AND ( ";
					}
					else{
						currentSpecial = " ( ";
					}
				}
				else{
					currentSpecial = " OR ";
					if(i == (keys.length - 1))
						end = ")";
				}
			}
			

			if(prop == '$lt'){
				result = montarWhere(propName, val, result, currentSpecial, " < ", end);
			}
			else if(prop == '$lte'){
				result = montarWhere(propName, val, result, currentSpecial, " <= ", end);
			}			
			else if(prop == '$gt'){
				result = montarWhere(propName, val, result, currentSpecial, " > ", end);
			}
			else if(prop == '$gte'){
				result = montarWhere(propName, val, result, currentSpecial, " >= ", end);
			}			
			else if(prop == '$like'){
				result = montarWhere(propName, val, result, currentSpecial, " LIKE ", end);
			}
			else if(prop == '$ne'){
				result = montarWhere(propName, val, result, currentSpecial, " <> ", end);
			}			
			else if(prop == '$or'){
				result = montarWhere(prop, val, result, " OR ", end);
			}			
			else{
				result = montarWhere(prop, val, result, currentSpecial, undefined, end);
			}
		}
		
		end = '';
		
		return result;
	}
	else {
		result = returnOrCreate(result, function() { 
					if(!specialConcat)
						specialConcat = ' AND ';}, function() {
					if(!specialConcat)
						specialConcat = "";});
		
		if(!operator)
			operator = " = ";
			
		if(!end)
			end = '';
		result.query = result.query + specialConcat + " (" + propName + operator + "?) " + end;
		result.objects.push(objValue);
	}
	
	return result;
}

function montarOrder(obj){
	sql = "";
	if(obj){
		sql = " ORDER BY ";
		if(typeof obj == 'object'){
			var keys = Object.keys(objValue);
			for(var i = 0; i < keys.length; i++){
				var prop = keys[i];
				var val = objValue[prop];

				sql = sql + prop + " " + val;

				if(i < (keys.length - 1)){
					sql = sql + ", ";
				}
			}			
		}
		else
			sql = sql + obj;
	}
	return sql;
}

function returnOrCreate(result, cbExists, cbNotExists){
	if(!result || !result.query){
		result = { query: '' };
		result.objects = new Array();
		if(cbNotExists)
			cbNotExists(result);
	}
	else{
		if(cbExists)
			cbExists(result);	
	}
	
	return result;
}

module.exports = SQL;