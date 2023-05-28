var buttons=["green","red","yellow","blue"];
var soundsource=["./sounds/green.mp3","./sounds/red.mp3","./sounds/yellow.mp3","./sounds/blue.mp3"];
var gamePattern=[];
var userpattern=[];
var level=0;
var started=false;


$(document).keydown(function(event)
{
    if(!started)
    {
        $("#lastt").text(" ");
        $("#level-title").text("Level " + level);
        sequence();
        started=true;
    }
 
});
$(".btn").click(function()
{
    var userColor=$(this).attr("id");
    userpattern.push(this.id);
    playSound(userColor);
    animatePress(userColor);
    checkAnswer(userpattern.length-1)
    
});
function sequence() {
    userpattern=[];
    var randomnum=Math.floor(Math.random()*4);
    var chosenColor=buttons[randomnum];
    gamePattern.push(chosenColor);
    $("#"+chosenColor).fadeOut(200).fadeIn(200);
    playSound(chosenColor);
    level++;
    $("#level-title").text("Level " + level);
    
}
    function playSound(name)
    {
      const rollSounds = new Audio("./sounds/"+name+".mp3");
      rollSounds.play();
    }
    function animatePress(currentColor)
    {
        $("#"+currentColor).addClass("pressed");
        setTimeout(function(){
         $("#"+currentColor).removeClass("pressed");},100);
    }
    function checkAnswer(len)
    {
     if(gamePattern[len]==userpattern[len])
      {
        if(userpattern.length == gamePattern.length)
        {
            setTimeout(function()
            {
                sequence();
            },1000);
        }
    }
        else
        {
            playSound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");
            $("#lastt").text("You reached Level "+level+" :(");
         setTimeout(function()
          {
            $("body").removeClass("game-over");
          },1000);
          startOver();
        }
      
     }

     function startOver()
     {
        
        level=0;
        started=false;
        gamePattern=[];
     }
    
    
    // function playSound(name)
// {
//     const rollSounds = new Audio("./sounds/"+name+".mp3");
//     rollSounds.play();
// }
    // $("#"+chosenColor).on(e => rollSound.play());
    
    // $('div[type="button"]').click(function() {
    //     setTimeout(function(){
    //     $(this).addClass("pressed").removeClass("pressed");
    //     },5000);
//     $('.box').addClass("bg1").delay(500).removeClass("bg1");
// });
        
        
       
     

