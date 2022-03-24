const path  = require('path');

//Page Listeners
var router = function(app) {
  app.get('/', function(req, res){
    res.status(200).sendFile(path.join(__dirname + "/../client/html/ss_home.html"));
  });

  app.get("/ss_home", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/html/ss_home.html"));

  })

  app.get("/ss_base", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "../client/css/ss_base.css"));

  })

  app.get("/minecraft", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/html/minecraft.html"));

  })

};
  module.exports = router;
