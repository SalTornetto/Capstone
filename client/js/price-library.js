// comparePrices();























// gameArray ,WpriceArray, ApriceArray, TpriceArray

// var placeholderHTML

// function createExplore(n){
//     if(n <= 0){
//         return -1
//     }
//     var placeholder = `<div class="container px-4 px-lg-5 mt-5"> <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> `;
    

//     var arr = [0, 1, 2, 3, 4, ,5 ];
//     shuffle(arr);
//     console.log(arr);







//     while(n != 0){ //how many times we create a card
//         console.log(n)
//         let temp = comparePrices(arr[n]);
//         if (temp <  gameAray[arr[n]].msrp){
//             placeholderPrice = temp;
//         }
//         else{
//             placeholderPrice = gameAray[arr[n]].msrp;
//         }


                 
//         placeholderHTML += ` 
//                     <img class="card-img-top" src="..${gameAray[arr[n]].Image_link}" alt="${gameAray[arr[n]].game_name}" /> <!-- Image --> <!-- Name -->
                    
//                     <div class="card-body p-4">
//                         <div class="text-center">           
//                             <h5 class="fw-bolder">${gameAray[arr[n]].game_name}</h5> <!-- Name -->                          
//                             <div id="cardPrice">
//                                 ${placeholderPrice} <!-- Price -->           
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                         <div class="text-center"><a onclick= "clickerF(${arr[n]})" class="btn btn-outline-dark mt-auto" href="/game_page">View Game</a></div>
//                     </div>
//         `;





//         n--;
//     }
    
    
    


    
//     // <span class="text-muted text-decoration-line-through">$59.99</span>
//     //  $29.99 
 

//     $('#exploreCards').html(placeholderHTML);
//     // adds n cards to html file

// }



// function shuffle(array) {
//   let currentIndex = array.length,  randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }




// <!-- Product image   https://s2.gaming-cdn.com/images/products/8908/orig/pokemon-legends-arceus-switch-game-nintendo-eshop-europe-cover.jpg  -->
// <img class="card-img-top" src="../images/pokemon-legends-arceus.jpg" alt="pokemon-legends-arceus" />
// <!-- Product details-->
// <div class="card-body p-4">
//     <div class="text-center">
//         <!-- Product name-->
//         <h5 class="fw-bolder">Pok&#233;mon Legends: Arceus </h5>
//         <!-- Product price-->
//         $59.99
//     </div>
// </div>
// <!-- Product actions-->
// <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div class="text-center"><a onclick= "clickerF(5)" class="btn btn-outline-dark mt-auto" href="/game_page">View Game</a></div>
// </div>














                        // i = localStorage.getItem('id');
                        // retrieveTPrice();
                        // retrieveAPrice();
                        // retrieveWPrice();


                        // function retrieveTPrice(){
                        //     //use ajax top get data
                        //     console.log("insidev the retreive Tprice")
                        //     $.ajax({
                        //         url: 'http://localhost:5200' + '/read-TPrice',
                        //         type: 'get',
                        //         success: function(response) {
                        //             var data = JSON.parse(response);
                        //             console.log(data);
                        //             if(data.msg === "SUCCESS") {
                        //                 createTPrice(data.price_history)
                        //             }else{
                        //                 console.log(data.msg);
                        //             }
                                    
                        //         },
                        //         error: function(err){
                        //             alert(err);
                        //         }
                        //     });
                        // }

                        // function retrieveAPrice(){
                        //     //use ajax top get data
                        //     console.log("insidev the retreive Aprice")
                        //     $.ajax({
                        //         url: 'http://localhost:5200' + '/read-APrice',
                        //         type: 'get',
                        //         success: function(response) {
                        //             var data = JSON.parse(response);
                        //             console.log(data);
                        //             if(data.msg === "SUCCESS") {
                        //                 createAPrice(data.price_history)
                        //             }else{
                        //                 console.log(data.msg);
                        //             }
                                    
                        //         },
                        //         error: function(err){
                        //             alert(err);
                        //         }
                        //     });
                        // }

                        // function retrieveWPrice(){
                        //     //use ajax top get data
                        //     console.log("insidev the retreive Wprice")
                        //     $.ajax({
                        //         url: 'http://localhost:5200' + '/read-WPrice',
                        //         type: 'get',
                        //         success: function(response) {
                        //             var data = JSON.parse(response);
                        //             console.log(data);
                        //             if(data.msg === "SUCCESS") {
                        //                 createWPrice(data.price_history)
                        //             }else{
                        //                 console.log(data.msg);
                        //             }
                                    
                        //         },
                        //         error: function(err){
                        //             alert(err);
                        //         }
                        //     });
                        // }


                        // function createTPrice(data){
                        //     // i = localStorage.getItem('id');
                            
                        //     let TpriceHTML = data[i].price;

                        //     if(TpriceHTML === 0 ){
                        //         $('#Tprice').html("N/A");
                        //     }
                        //     else{
                        //         $('#Tprice').html('$' + TpriceHTML);
                        //     }
                        // }

                        // function createAPrice(data){
                        //     let ApriceHTML = data[i].price;

                        //     if(ApriceHTML === 0 ){
                        //         $('#Aprice').html("N/A");
                        //     }
                        //     else{
                        //         $('#Aprice').html('$' + ApriceHTML);
                        //     }
                        // }

                        // function createWPrice(data){
                        //     let WpriceHTML = data[i].price;

                        //     if(WpriceHTML === 0 ){
                        //         $('#Wprice').html("N/A");
                        //     }
                        //     else{
                        //         $('#Wprice').html('$' + WpriceHTML);
                        //     }
                        // }









