var randomNumber;
var total;
var wins = 0;
var loss = 0;
var widthGen = 1;
var lossGen = 1;

function generate() {
    gemNumber1 = Math.floor(Math.random() * 10+1);  
    gemNumber2 = Math.floor(Math.random() * 10+1); 
    gemNumber3 = Math.floor(Math.random() * 10+1); 
    gemNumber4 = Math.floor(Math.random() * 10+1); 
    $(".gem1").attr("data-number", gemNumber1);
    $(".gem2").attr("data-number", gemNumber2);
    $(".gem3").attr("data-number", gemNumber3);
    $(".gem4").attr("data-number", gemNumber4); 
};

function initialize(){
    total = 0;
    generate();
    randomNumber = Math.floor(Math.random() * 99+12);
    $(".numberDiv").html(randomNumber);
    $("#score").html(total);
}

initialize();

$(".gems").on("click", function(){
   total+= parseInt($(this).attr("data-number"));
   if(total <= randomNumber){
       $("#score").html(total)
       if (total == randomNumber){
           wins++;
           console.log("you win");
           $(".nenergy").text("-ve Energy");
           $(".penergy").text("+ve Energy");
           $(".win").addClass("victory");
           widthGen+= 2*(wins);;
           $(".victory").css("width", widthGen);
           initialize();
       }
    }
       else{
           loss++;
           console.log("you lose");
           $(".loss").addClass("loser");
           lossGen+= 2*(loss);
           $(".nenergy").text("-ve Energy");
           $(".penergy").text("+ve Energy");
           $(".loser").css("width", lossGen);
           initialize(); 
   }
   console.log(total);
})
