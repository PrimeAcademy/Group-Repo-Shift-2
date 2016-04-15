var express = require("express");
var users = require("../modules/createTwentyUsers");
var User = require('../../models/usermodel');
var path = require('path');

var router = express.Router();

router.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get("/all", function(resquest, response) {
  response.send(users());

})

router.delete('/remove/:id', function(request, response){
  console.log('deleted object');
  User.findOneAndRemove({_id: request.params.id}, function(err) {
    if(err) {console.log('delete err', err);}
  });
  response.sendStatus(200);
})

module.exports = router;
