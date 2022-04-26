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

delay(1001).then(() => 
createExplore(4) 
);
//n being the number of cards created




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
    // console.log("insidev the retreive Aprice")
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
    // console.log("insidev the retreive Wprice")
    $.ajax({
        url: 'http://localhost:5200' + '/read-WPrice',
        type: 'get',
        success: function(response) {
            var dataW = JSON.parse(response);
            // console.log(dataW);
            if(dataW.msg === "SUCCESS") {
                createWPrice(dataW.price_history);
                WpriceArray = dataW.price_history;
                // setWPrice(dataW.price_history);
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




function setWPrice(data, n){
    WpriceHTML = data[n].price;
}

function setAPrice(data, n){
    ApriceHTML =data[n].price;
}

function setTPrice(data , n){   
    TpriceHTML = data[n].price; 
    
    // console.log("window3: " + window.TpriceHTML + " local: " + TpriceHTML);
} 








function comparePrices(n) {
    setWPrice(WpriceArray , n)
    setAPrice(ApriceArray , n)
    setTPrice(TpriceArray , n)
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
        return WpriceHTML.toFixed(2);
    }
    else if (WpriceHTML < ApriceHTML && WpriceHTML < TpriceHTML){
        // $('#Wprice').html('<div class="sale"> $' + WpriceHTML.toFixed(2) + '</div>');
        // console.log("Walmart Cheapest")
        truth = true;
        return [WpriceHTML.toFixed(2), 'W'];
    }

    else if (ApriceHTML < WpriceHTML && ApriceHTML < TpriceHTML){
        // $('#Aprice').html('<div class="sale"> $' + ApriceHTML.toFixed(2) + '</div>');
        // console.log("Amazon Cheapest")
        truth = true;
        return [ApriceHTML.toFixed(2), 'A'];
    }

    else if (TpriceHTML < WpriceHTML && TpriceHTML < ApriceHTML){
        // $('#Tprice').html('<div class="sale"> $' + TpriceHTML.toFixed(2) + '</div>');
        // console.log("Target Cheapest")
        truth = true;
        return [TpriceHTML.toFixed(2), 'T'];
    }
    console.log("Hit an if statement: " + truth);
}





















var placeholderHTML

function createExplore(n){
    var arr = [0, 1, 2, 3, 4, 5];
    if(n <= 0 || n > arr.length-1){
        console.log("----------ERROR------------");
        return 
    }
    placeholderHTML = `<div class="container px-4 px-lg-5 mt-5"> <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> `;
    

    
    console.log("Normal " + arr);
    shuffle(arr);
    console.log("Shuffeld " + arr);





    for(let j = 0; j < n; j++)
    //  while(n != 0)
   { //how many times we create a card
        console.log("n: " + n + " arr[j]: " + arr[j])
        console.log("i: " + i + 'arr[j]: ' + arr[j] )
    if (arr[j] == i){
        console.log("i and j are the same: " + i)
        n++;
        continue;
    }

        let temp =  comparePrices(arr[j])[0];      
            // delay(1000).then(() => 
            // comparePrices(arr[n])
            // );
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
                    <img class="card-img-top" src="..${gameArray[arr[j]].Image_link}" alt="${gameArray[arr[j]].game_name}" /> <!-- Image --> <!-- Name -->
                    
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





        // n--;
    }
    
    
    


    
    // <span class="text-muted text-decoration-line-through">$59.99</span>
    //  $29.99 
 
    // console.log(placeholderHTML);
    $('#exploreCards').html(placeholderHTML);
    // adds n cards to html file

}



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