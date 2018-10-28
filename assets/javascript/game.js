var randomNumber;
var total;
var wins = 0;
var loss = 0;
var widthGen = 1;
var lossGen = 1;
// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/captainplanet24.mp3");


 
function generate() {
    gemNumber1 = Math.floor(Math.random() * 11+1);  
    gemNumber2 = Math.floor(Math.random() * 11+1); 
    gemNumber3 = Math.floor(Math.random() * 11+1); 
    gemNumber4 = Math.floor(Math.random() * 11+1); 
    $(".gem1").attr("data-number", gemNumber1);
    $(".gem2").attr("data-number", gemNumber2);
    $(".gem3").attr("data-number", gemNumber3);
    $(".gem4").attr("data-number", gemNumber4); 
};

function initialize(){
    total = 0;
    generate();
    randomNumber = Math.floor(Math.random() * 99+19);
    $(".numberDiv").html(randomNumber);
    $("#score").html(total);
    $(".numberDiv").slideUp(300).slideDown(500);
}

initialize();

$(".gems").on("click", function(){
   total+= parseInt($(this).attr("data-number"));
   if(total <= randomNumber){
       $("#score").html(total)
       if (total == randomNumber){
           wins++;
           
           $(".nenergy").html("-ve Energy |" +loss);
           $(".penergy").html("+ve Energy |" +wins);
           $(".win").addClass("victory");
        //    audioElement.play();
           widthGen+= 2*(wins);;
           $(".victory").css("width", widthGen);
           initialize();
       }
    }
       else{
           loss++;
           $(".loss").addClass("loser");
           lossGen+= 2*(loss);
           $(".nenergy").html("-ve Energy |" +loss);
           $(".penergy").html("+ve Energy |" +wins);
           $(".loser").css("width", lossGen);
        //    audioElement.play();
           initialize(); 
   }
   
   if ((wins===12)||(loss===12)){
    document.location.reload();
   }
});


