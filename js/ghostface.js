var x=0;
var t;
var xPos;
var yPos;



$(document).ready(function(){

var firstName = window.prompt("What's your first name?");

var name_nam = "<p> Time to play a game,are you ready " + firstName + "?"+ " <p>";

$(".texta").append(name_nam);                                                                                
$("#gamespace").prepend('<img class="gameimage" src="img/ghostext.png"/>');  
  $("h4").show();                                                                                                                                                                  
changeButtonParameters();


  $('#start_button').click(function () {

   });
                    
  $('button#start_button').click(function () {
      $(this).off();   
    start();	 

 $("#gamespace").on("click","img", function(){

    var src = $(this).attr('src');
    if (src === "img/ghostext.png") {
    scoreCounter();
}



$("#gamespace").mouseover(function(){
$(this).css("background-color", "purple");
});



});	 
});	 	 
});


//---------------------------------------------------

function addImage() {
    console.log(xPos, yPos);
  xPos = horizontalAxis();
  yPos = verticalAxis();

      var image = $(
    '<img class="gameimage" src="img/ghostext.png" style="position:absolute; top:' +
      xPos +
      "px; left:" +
      yPos +
      'px;" />'
  );

    <!-- var ghostFace = setInterval(function () { -->
        $("#gamespace").prepend(image); 

t = setTimeout("addImage();", 2000);
  image.click(function() {
    scoreCounter();
    $(this).remove();
  });

  

}

function verticalAxis(){

 return (Math.floor(Math.random()*500)+1);                                                                 


}   

function horizontalAxis(){
 return  (Math.floor(Math.random()*260)+1);                                                                	

}   



//var x=0; 

function scoreCounter() {
   x=x+1; 
   $("#score").text(x+" pt");  

    
}


function changeButtonParameters(){
 $("#start_button").css(	{"border-radius": "12px", "padding": "2px", "margin": 
                       "20px","width":"80px","height": "45px","background-color": "purple",                
                        "font-size": "18px","color": "green"}); 
}



function start() {
   decreaseSeconds(); 
   addImage();                                                          
   $("#gamespace").prepend('<img class="gameimage" src="img/ghostext.png"/>');  
}


function decreaseSeconds() {
 var secondsBegin = 30; 
   var timer = setInterval( function() {

   secondsBegin =secondsBegin - 1;  
 var newSeconds = secondsBegin +" seconds left";
   $("h4").html(newSeconds);  
 
   if (secondsBegin === 0) {
   clearInterval(timer); 	   
}
        
}, 1000);
}

