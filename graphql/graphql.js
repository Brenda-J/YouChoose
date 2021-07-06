const axios = require("axios");
const API_KEY = require("../config/yelp_api");

let yelpBayArea = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/search",
  headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
  },

});

yelpBayArea("/businesses/search", {
    params: {
        location: "san francisco",
        term: "food",
        limit: 10,
    },
}).then(({ data }) => {
    let { businesses } = data 
    businesses.forEach((business) => {
        console.log(
            "Name: ", business.name,
            "Phone Number: ", business.display_phone,
            "Price: ", business.price,
            "Rating: ", business.rating,
            "Category: ", business.categories,
            "Address: ", business.location,
            "Yelp URL: ", business.url  
        )
    })
})

let yelpNY = axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
  },

});

yelpNY("/businesses/search", {
    params: {
        location: "new york city",
        term: "food",
        limit: 10,
    }
}).then(({ data }) => {
    let { businesses } = data 
    businesses.forEach((business) => {
        console.log(
            "Name: ", business.name,
            "Phone Number: ", business.display_phone,
            "Price: ", business.price,
            "Rating: ", business.rating,
            "Category: ", business.categories,
            "Address: ", business.location,
            "Yelp URL: ", business.url  
        )
    })
})





// things to install: graphql, express-graphql, express, axios

/* 
in entry file app.js
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql, graphqlHTTP({
    schema: xxxxxx,
    graphiql: true
}));


*/
