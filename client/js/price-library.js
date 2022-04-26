// comparePrices();



























function createExplore(){
    var placeholder;
    
    
    
    placeholderHTML = 
    ` 
    <img class="card-img-top" src="..${placeholder}" alt="${placeholder}" /> <!-- Image --> <!-- Name -->
    
    <div class="card-body p-4">
        <div class="text-center">           
            <h5 class="fw-bolder">${placeholder}</h5> <!-- Name -->
            
                                <div id="cardPrice">
                                    ${placeholder} <!-- Price -->           
                                </div>
        </div>
    </div>
    
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a onclick= "clickerF(${placeholder})" class="btn btn-outline-dark mt-auto" href="/game_page">View Game</a></div>
    </div>
    `;


    
    // <span class="text-muted text-decoration-line-through">$59.99</span>
    //  $29.99 
 




}








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









