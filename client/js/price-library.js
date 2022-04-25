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











