var myPix = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var myPictureList = Array.from(document.getElementsByClassName("img1"));
function pixGenerator() {

  var randomNumber1 = Math.floor(Math.random() * myPix.length);

  var finalResult = myPix[randomNumber1];
  myPictureList.forEach(function(pic){
    pic.src = finalResult;
  })

}

pixGenerator();
