// all these api call use the block name optiobns which needs to be changes to be more descriptive

//Amazon api code -- Hard Limit 200/month

//this is only for minecraft as shown in the url having product id B07D13QGXM
const request = require('request');

const optionsA = {
  method: 'GET',
  url: 'https://amazon24.p.rapidapi.com/api/product/B07D13QGXM',
  qs: {country: 'US'},
  headers: {
    'x-rapidapi-host': 'amazon24.p.rapidapi.com',
    'x-rapidapi-key': '098fb763bemshd82bc6a03bb30b5p1c44dbjsn5df752daea73',
    useQueryString: true
  }
};

request(optionsA, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});


//Target api code -- Hard Limit 50/month

//this is for legends arceus shown by having the tcin to 83617997
const request = require('request');

const optionsT = {
  method: 'GET',
  url: 'https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details',
  qs: {store_id: '3991', tcin: '83617997'},
  headers: {
    'x-rapidapi-host': 'target-com-store-product-reviews-locations-data.p.rapidapi.com',
    'x-rapidapi-key': '098fb763bemshd82bc6a03bb30b5p1c44dbjsn5df752daea73',
    useQueryString: true
  }
};

request(optionsT, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});


//walmart api for pokemon egends arcues  -     
const request = require('request');

const optionsW = {
  method: 'GET',
  url: 'https://walmart.p.rapidapi.com/products/v3/get-details',
  //usItemId is present at the end of the url for an item and serves as the look up 
  qs: {usItemId: '890161998'},
  headers: {
    'x-rapidapi-host': 'walmart.p.rapidapi.com',
    'x-rapidapi-key': '098fb763bemshd82bc6a03bb30b5p1c44dbjsn5df752daea73',
    useQueryString: true
  }
};

request(optionsW, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

