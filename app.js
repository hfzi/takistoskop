
var max, min

function app() {
  // console.log(document.querySelectorAll(".resim")[0].getBoundingClientRect().right)
  // console.log(document.querySelectorAll(".resim")[0].getBoundingClientRect().bottom)

  document.querySelector(".asd").setAttribute("style", "height: " + (window.outerHeight-200) + "px;");

  deger.setAttribute("style", "left: " + Math.floor((window.outerWidth)-100) + "px;" + "top: " + Math.floor((window.outerHeight)-100) + "px");

  console.log("gelen ", window.outerWidth)
}

var deger = document.querySelectorAll(".resim")[0]

setInterval(function(){
  // document.querySelectorAll(".resim")[0].style.left = 50
  
  deger.setAttribute("style", "left: " + Math.floor(Math.random() * (window.outerWidth-200) + 100)  + "px;" + "top: " +Math.floor(Math.random() * (window.outerHeight-200) + 100) + "px");

  // console.log("x ",Math.floor(Math.random() * (window.outerWidth-200)) + 100)
  // console.log("y ",Math.floor(Math.random() * (window.outerHeight-200)) + 100)

  var audio = new Audio('dsa.mp3');
  audio.play();
  

  // deger.setAttribute("style", "top: " + Math.floor((Math.random() * window.outerHeight)) + "px");
  // console.log(Math.floor((Math.random() * window.outerHeight)))
  // console.log(Math.floor((Math.random() * window.outerWidth)))
}, 300)
  console.log("hello!")

app()

// document.querySelectorAll(".resim")[0].setAttribute("style", "background-color:red;");
// document.querySelectorAll(".resim")[0].getBoundingClientRect().right

function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}