i = localStorage.getItem('id');
var WpriceHTML, ApriceHTML, TpriceHTML;
retrieveData();
retrieveTPrice();
retrieveWPrice();
retrieveAPrice();
delay(1000).then(() => 
comparePrices()
);
//using the delay toi make sure the database fully loads in browser and populates all nessisary varables



// console.log("window1: " + window.TpriceHTML + " local: " + TpriceHTML);
// console.log("W:" + WpriceHTML + " A:" + ApriceHTML + " T:" + TpriceHTML)
// 

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


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
    $.ajax({
        url: 'http://localhost:5200' + '/read-TPrice',
        type: 'get',
        success: function(response) {
            var dataT = JSON.parse(response);
            // console.log(dataT);
            if(dataT.msg === "SUCCESS") {
                createTPrice(dataT.price_history);
                setTPrice(dataT.price_history);
                
            }else{
                console.log(dataT.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function retrieveAPrice(){
    //use ajax top get data
    // console.log("insidev the retreive Aprice")
    $.ajax({
        url: 'http://localhost:5200' + '/read-APrice',
        type: 'get',
        success: function(response) {
            var dataA = JSON.parse(response);
            // console.log(dataA);
            if(dataA.msg === "SUCCESS") {
                createAPrice(dataA.price_history);
                setAPrice(dataA.price_history);
            }else{
                console.log(dataA.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function retrieveWPrice(){
    //use ajax top get data
    // console.log("insidev the retreive Wprice")
    $.ajax({
        url: 'http://localhost:5200' + '/read-WPrice',
        type: 'get',
        success: function(response) {
            var dataW = JSON.parse(response);
            // console.log(dataW);
            if(dataW.msg === "SUCCESS") {
                createWPrice(dataW.price_history);
                setWPrice(dataW.price_history);
            }else{
                console.log(dataW.msg);
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
    
    TpriceHTML = data[i].price;
    // localStorage.setItem("currentTprice", TpriceHTML);

    if(TpriceHTML === 0 ){
        $('#Tprice').html("N/A");
    }
    else{
        $('#Tprice').html('$' + TpriceHTML.toFixed(2)); //
    }
}

function createAPrice(data){
    ApriceHTML = data[i].price;
    // localStorage.setItem("currentAprice", ApriceHTML);

    if(ApriceHTML === 0 ){
        $('#Aprice').html("N/A");
    }
    else{
        $('#Aprice').html('$' + ApriceHTML.toFixed(2));
    }
}

function createWPrice(data){
    WpriceHTML = data[i].price;
    // localStorage.setItem("currentWprice", WpriceHTML);

    if(WpriceHTML === 0 ){
        $('#Wprice').html("N/A");
    }
    else{
        $('#Wprice').html('$' + WpriceHTML.toFixed(2));
    }
}




function setWPrice(data){
    WpriceHTML = data[i].price;
}

function setAPrice(data){
    ApriceHTML =data[i].price;
}

function setTPrice(data){   
    TpriceHTML = data[i].price; 
    
    // console.log("window3: " + window.TpriceHTML + " local: " + TpriceHTML);
}








function comparePrices() {
    // WpriceHTML, ApriceHTML, TpriceHTML;
    // WpriceHTML = localStorage.getItem('currentWprice');
    // ApriceHTML = localStorage.getItem('currentAprice');
    // TpriceHTML = localStorage.getItem('currentTprice');
    // console.log("windowFull: "+ " local: " + TpriceHTML);
    // console.log("windowFull: "+ " local: " + ApriceHTML);
    // console.log("windowFull: "+ " local: " + WpriceHTML);
    let truth = false;
    console.log("W:" + WpriceHTML + " A:" + ApriceHTML + " T:" + TpriceHTML)
    if (WpriceHTML === ApriceHTML && WpriceHTML === TpriceHTML){
        console.log("ALL EQUAL")
        truth = true;
    }
    else if (WpriceHTML < ApriceHTML && WpriceHTML < TpriceHTML){
        console.log("Walmart Cheapest")
        truth = true;
    }

    else if (ApriceHTML < WpriceHTML && ApriceHTML < TpriceHTML){
        console.log("Amazon Cheapest")
        truth = true;
    }

    else if (TpriceHTML < WpriceHTML && TpriceHTML < ApriceHTML){
        console.log("Target Cheapest")
        truth = true;
    }
    console.log("truth: " + truth);
}


