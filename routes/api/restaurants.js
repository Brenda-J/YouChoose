const express = require("express");
const router = express.Router();
const passport = require("passport");
const Restaurant = require("../../models/Restaurant");
const API_KEY = require("../../config/yelp_api").YELP_API_KEY;
const yelp = require("yelp-fusion");
const client = yelp.client(API_KEY);

router.get("/search", (req, res) => {
  const searchRequest = {
    term: `${req.query.cuisine} food`,
    location: `${req.query.location}`,
    limit: 50,
  };

  client
    .search(searchRequest)
    .then((response) => {
      const firstResult = response.jsonBody.businesses;
      // const firstResult = response.jsonBody.businesses[Math.floor(Math.random() * 50)].slice(0, 10);
      // const prettyJson = JSON.stringify(firstResult, null, 4);
      // let randomResults = firstResult[Math.floor(Math.random() * firstResult.length)].slice(0, 10);
      let randomResults = firstResult.sort((a,b)=> 0.5 - Math.random()).slice(0, 10)
      // console.log(prettyJson);
      res.json(randomResults);
    })
    .catch((e) => {
      console.log(e);
    });
});

router.post("/search", (req, res) => {
  const searchRequest = {
    term: `${req.body.cuisine} food`,
    location: `${req.body.location}`,
    limit: 50,
  };

  client
    .search(searchRequest)
    .then((response) => {
      const firstResult = response.jsonBody.businesses;
      // const firstResult = response.jsonBody.businesses[Math.floor(Math.random() * 50)].slice(0, 10);
      // let randomResults = firstResult[Math.floor(Math.random() * firstResult.length)].slice(0, 10);
      let randomResults = firstResult.sort((a,b)=> 0.5 - Math.random()).slice(0, 10)
      // const prettyJson = JSON.stringify(firstResult, null, 4);
      // console.log(req.body.cuisine);
      res.json(randomResults);
      
    })
    .catch((e) => {
      console.log(e);
    });
});

// route to get all of the restaurants
router.get("/", (req, res) => {
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  // req.body
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json(err));
});

// route to get a specific restaurant
router.get("/:restaurant_id", (req, res) => {
  Restaurant.find({ id: req.params.id }) //restaurant_id
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(400).json(err));
});

router.get("/favorites", (req,res) => {
  Restaurant.find({id: req.params.id})
  client.businessMatch({ id})
})

router.post("/favorites", (req,res) => {
  Restaurant.find({ id: req.body.id })
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(400).json(err));
  client.businessMatch({ id})
})

module.exports = router;
