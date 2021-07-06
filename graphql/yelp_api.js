'use strict';
const API_KEY = require('../config/yelp_api').YELP_API_KEY;
const yelp = require('yelp-fusion');
const client = yelp.client(API_KEY);


function searchCuisine({tag, cuisine, location}) {
    const searchRequest = {
        term: `${tag}+${cuisine} food`,
        location: `${location}`,
    };

    client.search(searchRequest).then(response => {
        const results = response.jsonBody.businesses;
        // let randomResults = results[Math.floor(Math.random() * results.length)].slice(0, 10);
        response.json(results);
    }).catch(e => {
        console.log(e);
    })
    
};


// const searchRequest = {
//     term: `italian food`,
//     location: `new york city`
// };


// client.search(searchRequest).then(response => {
//     const firstResult = response.jsonBody.businesses.slice(0, 10);
//     const prettyJson = JSON.stringify(firstResult, null, 4);
//     console.log(prettyJson); //return and assign  to variable or set state
// }).catch(e => {
//     console.log(e);
// });



