var hotelData = [
  {
      "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001717.jpg",
      "short_desc": "Queen Bed with Lanai Access",
      "long_desc": "Enjoy floor to ceiling windows with sliding glass door opening directly to a Sun Deck furnished with patio furniture and located on the 5th floor for your comfort and convenience during your stay.",
      "item_id": 100,
      "room_code": "QUEEN",
      "price": "$20 extra per night"
  },
  {
      "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001701.jpg",
      "short_desc": "King Bed with Lanai Access",
      "long_desc": "King Bed with Lanai Access. Enjoy floor to ceiling windows with sliding glass door opening directly to a Sun Deck furnished with patio furniture for relaxing on the 5th floor during your stay.",
      "item_id": 101,
      "room_code": "KING",
      "price": "$25 extra per night"
  },
  {
      "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001728.jpg",
      "short_desc": "Premier Suite with Lanai Access",
      "long_desc": "Enjoy this large open floor plan with dining area, living area including pullout sleeper sofa with attached King bedroom, wet bar, and refrigerator, featuring floor to ceiling windows with sliding glass door opening directly to a Sun Deck, ideal for meeting planners, executives or families looking for extra space.",
      "item_id": 102,
      "room_code": "SUITE",
      "price": "$30 extra per night"
  },
  {
      "image_url": "https://www.norone.com/nor1images/h-026/000892/small/00011999.jpg",
      "short_desc": "Champagne and Strawberries",
      "long_desc": "Upon arrival, enjoy a combination of fresh strawberries and a bottle of chilled champagne from the comfort of your own guestroom.",
      "item_id": 103,
      "price": "$100 extra"
  }
]

var bodyParser = require("body-parser");
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

app.post("/booking", function(req, res){
  var firstName = req.body.first;
  var lastName =  req.body.last;
  //var queen = req.body.queen;
  //var new = hodelData[1].room_code;
  // if  === req.body.queen
  // price === 99
  // console.log(hodelData[1].room_code);
  // console.log(req.body.king);
  // console.log(req.body.suite);
  res.render("booking", {hotelData: hotelData, firstName:firstName, lastName:lastName});
});

app.listen(4000, function () {
    console.log("server start on port 4000");
});

// with <%= sign %> the value return will be render and will added to html
// I love <%= 5 + 5 %>

// with <% %> this is just pure logic
// with when you write conditions
