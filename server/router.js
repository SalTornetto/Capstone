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
    res.status(200).sendFile(path.join(__dirname + "/../client/css/ss_base.css"));

  })

  app.get("/ss_searchbar", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/css/ss_searchbar.css"));

  })

  app.get("/minecraftcss", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/css/minecraft.css"));

  })

  app.get("/game_page", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/html/game_page.html"));

  })

  app.get("/search", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/html/search.html"));

  })

  app.get("/images/logo.png", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/logo.png"));

  })

  app.get("/images/istockphotoBlue.jpg", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/istockphotoBlue.jpg"));
  
  })


  app.get("/images/fortnite.jpg", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/fortnite.jpg"));

  })

  app.get("/images/minecraft.jpg", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/minecraft.jpg"));

  })

  app.get("/images/gtav.jpg", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/gtav.jpg"));

  })

  app.get("/images/skyrim.jpg", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/skyrim.jpg"));

  })

  app.get("/images/overwatch.jpg", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/overwatch.jpg"));

  })

  app.get("/images/pokemon-legends-arceus.jpg", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/pokemon-legends-arceus.jpg"));

  })

  app.get("/images/loadingCircle.gif", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/images/loadingCircle.gif"));

  })

  
};
  module.exports = router;
