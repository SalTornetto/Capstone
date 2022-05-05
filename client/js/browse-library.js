i = localStorage.getItem('id');
var WpriceHTML, ApriceHTML, TpriceHTML;
var gameArray ,WpriceArray, ApriceArray, TpriceArray
retrieveData();
retrieveTPrice();
retrieveWPrice();
retrieveAPrice();

delay(1000).then(() => 
decipherComparePrices(i)
);
//using the delay to make sure the database fully loads in browser and populates all nessisary varables
//trying to avboid race conditions
delay(1001).then(() => 
createExplore(4) 
);


function decipherComparePrices(i){
   j = comparePrices(i);
    if (j[1] === 'T'){
        $('#Tprice').html('<div class="sale"> $' + j[0] + '</div>');
    }
    else if (j[1] === 'A'){
        $('#Aprice').html('<div class="sale"> $' + j[0] + '</div>');
    }
    else if (j[1] === 'W'){
        $('#Wprice').html('<div class="sale"> $' + j[0] + '</div>');
    }
    
}


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
                gameArray = data.game;
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
                TpriceArray = dataT.price_history;
                
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
    $.ajax({
        url: 'http://localhost:5200' + '/read-APrice',
        type: 'get',
        success: function(response) {
            var dataA = JSON.parse(response);
            // console.log(dataA);
            if(dataA.msg === "SUCCESS") {
                createAPrice(dataA.price_history);
                ApriceArray = dataA.price_history;
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
    $.ajax({
        url: 'http://localhost:5200' + '/read-WPrice',
        type: 'get',
        success: function(response) {
            var dataW = JSON.parse(response);
            if(dataW.msg === "SUCCESS") {
                createWPrice(dataW.price_history);
                WpriceArray = dataW.price_history;              
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
    
    WlinkHTML = `<a href="https://www.walmart.com/ip/${data[i].walmartID}" target="_blank" rel="noopener noreferrer"> <img class="card-img-top mb-5 mb-md-0" src="../images/walmartLogo.png" title="Walmart" alt="Walmart" /> </a>`
    $('#WLink').html(WlinkHTML);

    AlinkHTML = `<a href="https://www.amazon.com/dp/${data[i].amazonID}" target="_blank" rel="noopener noreferrer"><img  class="card-img-top mb-5 mb-md-0" src="../images/amazonLogo.png" title="Amazon" alt="Amazon" /> </a>`
    $('#ALink').html(AlinkHTML);

    TlinkHTML = `<a href="https://www.target.com/p/A-${data[i].targetID}" target="_blank" rel="noopener noreferrer"><img  class="card-img-top mb-5 mb-md-0" src="../images/targetLogo.png" title="Target" alt="Target" />  </a> `
    $('#TLink').html(TlinkHTML);

//Format for links tyo other sites

// `https://www.walmart.com/ip/${walmartID}`

// `https://www.amazon.com/dp/${amazonID}`

// `https://www.target.com/p/A-${targetID}`

    
   
}


function createTPrice(data){
    TpriceHTML = data[i].price;


    if(TpriceHTML === 0 ){
        $('#Tprice').html("N/A");
    }
    else{
        $('#Tprice').html('$' + TpriceHTML.toFixed(2)); //
    }
}

function createAPrice(data){
    ApriceHTML = data[i].price;

    if(ApriceHTML === 0 ){
        $('#Aprice').html("N/A");
    }
    else{
        $('#Aprice').html('$' + ApriceHTML.toFixed(2));
    }
}

function createWPrice(data){
    WpriceHTML = data[i].price;

    if(WpriceHTML === 0 ){
        $('#Wprice').html("N/A");
    }
    else{
        $('#Wprice').html('$' + WpriceHTML.toFixed(2));
    }
}


function setWPrice(data, n){
    WpriceHTML = data[n].price;
}

function setAPrice(data, n){
    ApriceHTML = data[n].price;
}

function setTPrice(data , n){   
    TpriceHTML = data[n].price; 
    
} 

//function that compares prices and sends back the initial of the cheapest store along with  the cheapest price
function comparePrices(n) {
    setWPrice(WpriceArray , n)
    setAPrice(ApriceArray , n)
    setTPrice(TpriceArray , n)
    
    // console.log("W:" + WpriceHTML + " A:" + ApriceHTML + " T:" + TpriceHTML)
    if (WpriceHTML === ApriceHTML && WpriceHTML === TpriceHTML){
        return WpriceHTML.toFixed(2);
    }
    else if (WpriceHTML < ApriceHTML && WpriceHTML < TpriceHTML){
        return [WpriceHTML.toFixed(2), 'W'];
    }

    else if (ApriceHTML < WpriceHTML && ApriceHTML < TpriceHTML){
        return [ApriceHTML.toFixed(2), 'A'];
    }

    else if (TpriceHTML < WpriceHTML && TpriceHTML < ApriceHTML){
        return [TpriceHTML.toFixed(2), 'T'];
    }

}

var placeholderHTML


//this function creats n number of cards to be displayed on the home/game/search pages
//i only even use it to set 4 cards but it will work for up to 1 less the total number of games because
//it excludes the current game
function createExplore(n){
    var arr = [0, 1, 2, 3, 4, 5, 6];
    if(n <= 0 || n > arr.length-1){
        console.log("----------ERROR------------");
        return 
    }
    placeholderHTML = `<div class="container px-4 px-lg-5 mt-5"> <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> `;
    
    shuffle(arr);

    for(let j = 0; j < n; j++){
    //  while(n != 0)
    //n is how many times we create a card

    if (arr[j] == i){
        n++;
        continue;
    }

        let temp =  comparePrices(arr[j])[0];      

            salesBagde = '';
            if(gameArray[arr[j]].msrp === 0){
                placeholderPrice = "FREE"
            }
            else if (temp <  gameArray[arr[j]].msrp){
                placeholderPrice = `<span class="text-muted text-decoration-line-through">` + gameArray[arr[j]].msrp + `</span> $` + temp;
                salesBagde = `<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>`;
            }
            else{
                placeholderPrice = "$" + gameArray[arr[j]].msrp;
            }
       
        placeholderHTML += ` 
        <div class="col mb-5">
        <div id="card1" class="card h-100">
                    ${salesBagde}
                    <img class="SScard-img-top" src="..${gameArray[arr[j]].Image_link}" alt="${gameArray[arr[j]].game_name}" /> <!-- Image --> <!-- Name -->
                    
                    <div class="card-body p-4">
                        <div class="text-center">           
                            <h5 class="fw-bolder">${gameArray[arr[j]].game_name}</h5> <!-- Name -->                          
                            <div id="cardPrice">
                                ${placeholderPrice} <!-- Price -->           
                            </div>
                        </div>
                    </div>
                    
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a onclick= "clickerF(${arr[j]})" class="btn btn-outline-dark mt-auto" href="/game_page">View Game</a></div>
                    </div>
                    </div>
                    </div>
                            `;

    }//end for loop
  
    $('#exploreCards').html(placeholderHTML);

}


//used to randomize the games shown
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}