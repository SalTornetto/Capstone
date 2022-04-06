const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',//change this for real hosting, this is jsut local
  user: 'root',
  password: "Lego0582$",//dont forget this
  database: 'savinsum',
  
});

connection.connect((err) => {
    if(err) throw err;
  
    console.log("Connected to mysql!")
  });

var services = function(app) {
   

    app.get('/read-records', function(req, res){
      connection.query("SELECT * FROM game JOIN genre ON game.idGenre = genre.idGenre JOIN price_history 	ON game.idGame = price_history.idGames WHERE (SELECT price FROM game JOIN price_history  ON game.idGame = price_history.idGames WHERE idGame = 1  group by idGames order BY price_date ASC) group by idGame ORDER BY idGame", function(err, rows){
          if(err){
            return res.status(201).send(JSON.stringify({msg: "FAIL:" + err}));
          }else{
            console.log("data: " + JSON.stringify(rows));
            return res.status(201).send(JSON.stringify({msg: "SUCCESS", game:rows}));
          }
      });
    });

    app.get('/read-genres', function(req, res){
        connection.query("SELECT * FROM game JOIN genre ON game.idGenre = genre.idGenre ORDER BY idGame", function(err, rows){
            if(err){
              return res.status(201).send(JSON.stringify({msg: "FAIL:" + err}));
            }else{
              console.log("data: " + JSON.stringify(rows));
              return res.status(201).send(JSON.stringify({msg: "SUCCESS", game:rows}));
            }
        });
      });
}; //end services

module.exports = services;