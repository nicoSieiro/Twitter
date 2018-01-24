const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const tweetBank = require('../tweetBank');
var urlencodedParser = bodyParser.urlencoded({extended:true})
router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
});

router.get( '/users/:name', function (req, res) {
    var users = tweetBank.find(function(tweet){
        return req.params.name == tweet.name
    })
    res.render( 'index', { tweets: users } );
});

router.get('/tweets/:id',function(req,res){    
    var tweet = tweetBank.find(function (tweet) {
        return req.params.id == tweet.id
    })
    res.render( 'index', { tweets: tweet } );
})

router.post('/tweets', urlencodedParser, function(req,res){    
    var name = req.body.name
    var text = req.body.text
    tweetBank.add(name,text)
    res.redirect( '/' );
})



module.exports = router;