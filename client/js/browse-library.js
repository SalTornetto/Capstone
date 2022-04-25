i = localStorage.getItem('id');
retrieveData();
retrieveTPrice();
retrieveAPrice();
retrieveWPrice();


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



function retrieveTPrice(){
    //use ajax top get data
    console.log("insidev the retreive Tprice")
    $.ajax({
        url: 'http://localhost:5200' + '/read-TPrice',
        type: 'get',
        success: function(response) {
            var data = JSON.parse(response);
            console.log(data);
            if(data.msg === "SUCCESS") {
                createTPrice(data.price_history)
            }else{
                console.log(data.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function retrieveAPrice(){
    //use ajax top get data
    console.log("insidev the retreive Aprice")
    $.ajax({
        url: 'http://localhost:5200' + '/read-APrice',
        type: 'get',
        success: function(response) {
            var data = JSON.parse(response);
            console.log(data);
            if(data.msg === "SUCCESS") {
                createAPrice(data.price_history)
            }else{
                console.log(data.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function retrieveWPrice(){
    //use ajax top get data
    console.log("insidev the retreive Wprice")
    $.ajax({
        url: 'http://localhost:5200' + '/read-WPrice',
        type: 'get',
        success: function(response) {
            var data = JSON.parse(response);
            console.log(data);
            if(data.msg === "SUCCESS") {
                createWPrice(data.price_history)
            }else{
                console.log(data.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}


function createSSdesciption(data){
    var descriptionHTML,nameHTML, developerHTML = "";
    i = localStorage.getItem('id');

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

    priceHTML = data[i].msrp;
    if(priceHTML === 0 ){
        $('#SSprice').html("FREE");
    }
    else{
        $('#SSprice').html("MSRP: $" + priceHTML);
    }
    
   
}


function createTPrice(data){
    // i = localStorage.getItem('id');
    
    let TpriceHTML = data[i].price;

    if(TpriceHTML === 0 ){
        $('#Tprice').html("N/A");
    }
    else{
        $('#Tprice').html('$' + TpriceHTML);
    }
}

function createAPrice(data){
    let ApriceHTML = data[i].price;

    if(ApriceHTML === 0 ){
        $('#Aprice').html("N/A");
    }
    else{
        $('#Aprice').html('$' + ApriceHTML);
    }
}

function createWPrice(data){
    let WpriceHTML = data[i].price;

    if(WpriceHTML === 0 ){
        $('#Wprice').html("N/A");
    }
    else{
        $('#Wprice').html('$' + WpriceHTML);
    }
}





