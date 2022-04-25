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
      connection.query("SELECT * FROM game JOIN genre ON game.idGenre = genre.idGenre group by idGame ORDER BY idGame", function(err, rows){
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

      app.get('/read-TPrice', function(req, res){
        // let tempID = 1;
        let Tquery = `SELECT * FROM (SELECT idGames, MAX(price_date) AS price_date, price, store FROM price_history Where store = 'Target' GROUP BY price_date order by idGames, price_date desc) as tbale1 group by idGames`
        connection.query(Tquery, function(err, rows){
            if(err){
              return res.status(201).send(JSON.stringify({msg: "FAIL:" + err}));
            }else{
              console.log("data: " + JSON.stringify(rows));
              return res.status(201).send(JSON.stringify({msg: "SUCCESS", price_history:rows}));
            }
        });
      });

      app.get('/read-APrice', function(req, res){
        let Aquery = `SELECT * FROM (SELECT idGames, MAX(price_date) AS price_date, price, store FROM price_history Where store = 'Amazon' GROUP BY price_date order by idGames, price_date desc) as tbale1 group by idGames`
        connection.query(Aquery, function(err, rows){
            if(err){
              return res.status(201).send(JSON.stringify({msg: "FAIL:" + err}));
            }else{
              console.log("data: " + JSON.stringify(rows));
              return res.status(201).send(JSON.stringify({msg: "SUCCESS", price_history:rows}));
            }
        });
      });

      app.get('/read-WPrice', function(req, res){
        // let tempID = 1;
        let Wquery = `SELECT * FROM (SELECT idGames, MAX(price_date) AS price_date, price, store FROM price_history Where store = 'Walmart' GROUP BY price_date order by idGames, price_date desc) as tbale1 group by idGames`
        connection.query(Wquery, function(err, rows){
            if(err){
              return res.status(201).send(JSON.stringify({msg: "FAIL:" + err}));
            }else{
              console.log("data: " + JSON.stringify(rows));
              return res.status(201).send(JSON.stringify({msg: "SUCCESS", price_history:rows}));
            }
        });
      });




}; //end services

// `SELECT * FROM price_history WHERE price_date < current_date AND store='Target' AND idGames = '1' ORDER BY price_date DESC LIMIT 1`

// "SELECT * FROM price_history WHERE price_date < current_date AND store='Target' AND idGames = '1' ORDER BY price_date DESC LIMIT 1"


module.exports = services;