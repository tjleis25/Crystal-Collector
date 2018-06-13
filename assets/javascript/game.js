// Initial variables

var computerChoice = Math.floor(Math.random() * (120-19) + 19);

//Crystals
var yellow = Math.floor(Math.random() * (12-1) + 1);
var red = Math.floor(Math.random() * (11) + 1);
var green = Math.floor(Math.random() * (11) + 1);
var blue = Math.floor(Math.random() * (11) + 1);

// Game Stats
var wins = 0; 
var losses = 0; 
var totalScore = 0; 

//Functions
//====================================================================================================

//startGame()
//start and restart the game

function startGame(min, max) {
       
    console.log("Computer Choice: " + computerChoice);

    blue; 
    console.log("Blue Crystal: " + blue);

    green; 
    console.log("Green Crystal: " + green);
    
    red; 
    console.log("Red Crystal: " + red);

    yellow; 
    console.log("Yellow Crystal: " + yellow);
    
}

// function nextGame() {

//     var computerChoice = Math.floor(Math.random() * (120-19) + 19);
//     var yellow = Math.floor(Math.random() * (12-1) + 1);
//     var red = Math.floor(Math.random() * (11) + 1);
//     var green = Math.floor(Math.random() * (11) + 1);
//     var blue = Math.floor(Math.random() * (11) + 1);
    
// }



//Create an event listener
//=======================================================

$("#yellow-crystal").on("click", function() {
    totalScore = totalScore + yellow;
    
    console.log("Total Score: " + totalScore);
    
    $("#total-score").text(totalScore);
    
    if (totalScore === computerChoice) {
        alert("You Win!");
        wins++;
        console.log("Wins:" + wins);
        $("#win-counter").text("Wins: " + wins);
        totalScore = 0;         
        $("#total-score").text(totalScore);
        $("#score").text(computerChoice);
        newNumber();        

        
    } 
        else if (totalScore > computerChoice) {
        alert ("You Lose!");
        losses++;
        console.log("Losses: " + losses);
        $("#loss-counter").text("Losses: " + losses);
        totalScore = 0;
        $("#total-score").text(totalScore);
        $("#score").text(computerChoice);
        newNumber();               
        
    }
    
})

$("#red-crystal").on("click", function() {
    totalScore = totalScore + red;
    
    console.log("Total Score: " + totalScore);
    
    $("#total-score").text(totalScore);
    
    if (totalScore === computerChoice) {
        alert("You Win!");
        wins++;
        console.log("Wins:" + wins);
        $("#win-counter").text("Wins: " + wins);
        totalScore = 0;
        $("#total-score").text(totalScore);
        $("#score").text(computerChoice);
        newNumber();
        
        
    } 
        else if (totalScore > computerChoice) {
        alert ("You Lose!");
        losses++;
        console.log("Losses: " + losses);
        $("#loss-counter").text("Losses: " + losses);
        totalScore = 0;
        $("#total-score").text(totalScore); 
        $("#score").text(computerChoice);
        newNumber();
        
        
    }
    
})

$("#green-crystal").on("click", function() {
    totalScore = totalScore + green;
    
    console.log("Total Score: " + totalScore);
    
    $("#total-score").text(totalScore);
    
    if (totalScore === computerChoice) {
        alert("You Win!");
        wins++;
        console.log("Wins:" + wins);
        $("#win-counter").text("Wins: " + wins);
        totalScore = 0;
        $("#total-score").text(totalScore); 
        $("#score").text(computerChoice);
        newNumber();
                        

    } else if (totalScore > computerChoice) {
        alert ("You Lose!");
        losses++;
        console.log("Losses: " + losses);
        $("#loss-counter").text("Losses: " + losses);
        totalScore = 0;
        $("#total-score").text(totalScore); 
        $("#score").text(computerChoice);
        newNumber();       
                 
    }
    
})

$("#blue-crystal").on("click", function() {
    totalScore = totalScore + blue; 
    
    console.log("Total Score: " + totalScore);
    
    $("#total-score").text(totalScore);
    
    if (totalScore === computerChoice) {
        alert("You Win!");
        wins++;
        console.log("Wins:" + wins);
        $("#win-counter").text("Wins: " + wins);
        totalScore = 0;        
        $("#total-score").text(totalScore); 
        $("#score").text(computerChoice); 
        newNumber();     
         

    } else if (totalScore > computerChoice) {
        alert ("You Lose!");
        losses++;
        console.log("Losses: " + losses); 
        $("#loss-counter").text("Losses: " + losses);
        totalScore = 0;       
        $("#total-score").text(totalScore); 
        $("#score").text(computerChoice);
        newNumber();     
       
        
    }
    
})

function newNumber() {

    computerChoice = Math.floor(Math.random() * (120-19) + 19);
    $("#score").text(computerChoice); 

}

//text to html
//====================================================

$("#score").text(computerChoice); 
 



//Call the Functions
//====================================================

$(document).ready(function() {
    
startGame(19,120); 
    
    
})