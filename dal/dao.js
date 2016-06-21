var SQL = require('./sql.js');

var DAO = function(vtable, vreq) {
  if(!vreq || typeof vreq == 'undefined')
    vreq = {};

  this.req = vreq;
  this.table = vtable;

  this.list = function(obj, callback) {
    var req = this.req;
    var table = this.table;

    if(!callback){
      callback = obj;
    }
    else{
      req.query = obj;
    }
    
    req.getConnection(function(err, connection) {
      if (err) {
        callback(err);
      } else {  
        var sql = new SQL(table, req);
        console.log(sql.query);
        connection.query(sql.query, sql.objects, callback);
      }
    });
  };

  this.findAll = function(obj, callback){
    this.list(obj, callback);
  };

  this.get = function(id, callback) {
    var req = this.req;
    var table = this.table;
    req.getConnection(function(err, connection) {
      if (err) {
        callback(err);
      } else {
        connection.query("SELECT * FROM ?? WHERE Id = ?", [table, id], function(err, result){

          if(result && result.length > 0){
            callback(err, result[0]);
          }
          else
            callback(err, result);
        });
      }
    });
  };

  this.find = function(id, callback){
    this.get(id, callback);
  };  

  this.remove = function(id, callback) {
    var req = this.req;
    var table = this.table;
    req.getConnection(function(err, connection) {
      if (err) {
        callback(err);
      } else {
        connection.beginTransaction(function(err) {
          if (err) {
            callback(err);
          } else {
            connection.query('DELETE FROM ?? WHERE Id = ?', [table, id], function(err, result) {
              if (err) {
                connection.rollback(function() {
                  callback(err);
                });
              } else {
                connection.commit(function(err) {
                  if (err) {
                    connection.rollback(function() {
                      callback(err);
                    });
                  } else {
                    callback(err, id);
                  }
                });
              }
            });
          }
        });
      }
    });
  };

  this.save = function(obj, callback) {
    var req = this.req;
    var table = this.table;
    var id = obj.id;
    var exists = (obj.id && obj.id > 0);
    var queryObjs = new Array();
    queryObjs.push(table);
    queryObjs.push(obj);

    delete obj["id"];

    var sql = 'UPDATE ?? SET ? WHERE Id = ?';
    if (!exists) {
      sql = 'INSERT INTO ?? SET ?';
    }
    else
    {
      queryObjs.push(id);
    }
    console.log(sql);
    console.log(queryObjs);
    req.getConnection(function(err, connection) {
      if (err) {
        callback(err);
      } else {
        connection.beginTransaction(function(err) {
          if (err) {
            callback(err);
          } else {
            connection.query(sql, queryObjs, function(err, result) {
              if (err) {
                connection.rollback(function() {
                  callback(err);
                });
              } else {
                connection.commit(function(err) {
                  if (err) {
                    connection.rollback(function() {
                      callback(err);
                    });
                  } else {
                    if (!exists) {
                      obj.id = result.insertId;
                    }
                    callback(err, obj);
                  }
                });
              }
            });
          }
        });
      }
    });
  };

  this.create = function(obj, callback){
    this.save(obj, callback);
  };

  this.update = function(obj, callback){
    this.save(obj, callback);
  };  
};
module.exports = DAO;
