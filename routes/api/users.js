const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const Restaurant = require('../../models/Restaurant');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

router.get("/users", (req, res) => res.json({
    msg: "This is the users index route!"
}));

router.post("/signup", (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: 'This user not found.' });

        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, username: user.username };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ email: 'This user does not exist.' });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, username: user.username , favorites: {}};

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
})

router.post('/favorites', (req,res) => {
   let user =  User.findOne({ username: req.body.username });
    if(user){
        const newRestaurant = new Restaurant({
            id: req.body.id,
            name: req.body.name,
            category: req.body.category,
            ratings: req.body.ratings,
            isFavorited: true,
            userId: user.id
        });
        newRestaurant
          .save()
          .then((restaurant) => {
            // const restaurantPayload = { id: restaurant.id }
            res.json(restaurant)
          })
          .catch((err) => console.log(err));

    }else{
        return res.status(400);
    }
})

router.delete('/favorites/:restaurantId', (req, res) => {
    let user = User.findOne({ username: req.body.username });
    let restaurant = Restaurant.findOne({id: req.body.id});
    if (user) {
      if (user.id === restaurant.userId) {
          res.json.delete(restaurant)
      }
    } else {
      return res.status(400);
    }
})



module.exports = router;
