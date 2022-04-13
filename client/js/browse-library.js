retrieveData();


function retrieveData(){
    //use ajax top get data
    $.ajax({
        url: 'http://localhost:5200' + '/read-records',
        type: 'get',
        success: function(response) {
            var data = JSON.parse(response);
            if(data.msg === "SUCCESS") {
                createSSdesciption(data.game);
            }else{
                console.log(data.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}



/*
function retrieveData(idGame){
    //use ajax top get data
    $.ajax({
        url: 'http://localhost:5200' + '/read-records',
        type: 'get',
        success: function(response) {
            var data = JSON.parse(response);
            if(data.msg === "SUCCESS") {
                createSSdesciption(data.game, idGame);
            }else{
                console.log(data.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}
*/
//i=4;

function createSSdesciption(data){
    var descriptionHTML,nameHTML, developerHTML = "";
   // i=this.id;
    imageHTML = '<img class="card-img-top mb-5 mb-md-0" src="..' + data[i].Image_link + '" alt="' + data[i].game_name + '" />';
    $('#SSimage').html(imageHTML);

    descriptionHTML = data[i].description;
    $('#SSdescription').html(descriptionHTML);

    nameHTML = data[i].game_name;
    $('#SSname').html(nameHTML);
    
    developerHTML = "Developer: " + data[i].developer;
    $('#SSdeveloper').html(developerHTML);

    genreHTML = "Genre: " + data[i].genre_name;
    $('#SSgenre').html(genreHTML);

    priceHTML = data[i].price;
    if(priceHTML === 0 ){
        $('#SSprice').html("FREE");
    }
    else{
        $('#SSprice').html("$" + priceHTML);
    }
    
   
}

/*
function getPriceData(idGame){
    //use ajax top get data
    $.ajax({
        url: 'http://localhost:5200' + '/price-records',
        type: 'get',
        success: function(response) {
            var data = JSON.parse(response);
            if(data.msg === "SUCCESS") {
               // createSSdesciption(data.game);
            }else{
                console.log(data.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}



//send to services
app.get('/price-records', function(req, res){
    connection.query("SELECT * FROM game JOIN price_history  ON game.idGame = price_history.idGames WHERE idGame =" + idGame + "ORDER BY idPrice DESC", function(err, rows){
        if(err){
          return res.status(201).send(JSON.stringify({msg: "FAIL:" + err}));
        }else{
          console.log("data: " + JSON.stringify(rows));
          return res.status(201).send(JSON.stringify({msg: "SUCCESS", game:rows}));
        }
    });
  });

  


  window.onload = function(){ 
    document.getElementById("button2").onclick = () => {
        i = 2;
        location.reload()
    }
};
   

document.getElementById("button2").addEventListener("click", i = 2);

*/ 
