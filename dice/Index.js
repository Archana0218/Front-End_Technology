//p 1
var randomNum1 = Math.floor(Math.random() * 6 ) + 1;
var randomImage1 = "image/dice" + randomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);


// player 2 
var randomNum2 = Math.floor(Math.random() * 6 ) + 1;
var randomImage2 = "image/dice" + randomNum1 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);



//decide who is win

if(randomNum1 > randomNum2)
{
    document.querySelector("h2").innerHTML="Players 1 Wins";
    }
else if(randomNum2 > randomNum1)
    {
        document.querySelector("h2"). innerHTML="player 2 is wins";
    }
else{
    document.querySelector("h2").innerHTML="DRAWS";
}



