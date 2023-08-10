//if we click start/reset button
    //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1sec in loops
        //time left?
            //yes --> continue
            //no--> game over
        //change button to reset
        //generate new Q&A

//if we click on answer box
    //if we are playing
        //correct
            //yes
                //increase score
                //show correct box for 1 sec
                //generate new Q&A
            //no
                //show try again for 1 sec
var answerbox=Math.floor(Math.random()*4) + 1

function startButton(){
// Setting conditions for start and reset   
    
    if(document.getElementById("startreset").innerHTML=="Reset Game"){
        window.location.reload();
        
    }else{
    
//setting random numbers and multiplying them
    
    var question= document.getElementById("question");
    var firstNumber = Math.round(Math.random()*10);
    var secondNumber = Math.round(Math.random()*10);
    if(firstNumber == 0){
        firstNumber +=2
    }else if(firstNumber == 1){
        firstNumber += 1
    };
    if(secondNumber == 0){
        secondNumber +=2
    }else if(secondNumber == 1){
        secondNumber += 1
    };
   question.innerHTML = firstNumber + " x " + secondNumber;
    
    var answer = firstNumber * secondNumber; 
  
// scattering answers in random boxes
    
    document.getElementById("box1").innerHTML = ""
    document.getElementById("box2").innerHTML = ""
    document.getElementById("box3").innerHTML = ""
    document.getElementById("box4").innerHTML = ""
    if (answerbox == 1){
        document.getElementById("box2").innerHTML = (firstNumber - 1) * (secondNumber)
        document.getElementById("box3").innerHTML = (firstNumber) * (secondNumber+1)
        document.getElementById("box4").innerHTML = (firstNumber - 1) * (secondNumber - 1)
        document.getElementById("box"+answerbox).innerHTML = answer
    }else if(answerbox == 2){
        document.getElementById("box1").innerHTML = (firstNumber - 1) * (secondNumber)
        document.getElementById("box3").innerHTML = (firstNumber) * (secondNumber+1)
        document.getElementById("box4").innerHTML = (firstNumber - 1) * (secondNumber - 1)
        document.getElementById("box"+answerbox).innerHTML = answer
    }else if(answerbox == 3){
        document.getElementById("box2").innerHTML = (firstNumber - 1) * (secondNumber)
        document.getElementById("box1").innerHTML = (firstNumber) * (secondNumber+1)
        document.getElementById("box4").innerHTML = (firstNumber - 1) * (secondNumber - 1)
        document.getElementById("box"+answerbox).innerHTML = answer
    }else if(answerbox == 4){
        document.getElementById("box2").innerHTML = (firstNumber - 1) * (secondNumber)
        document.getElementById("box3").innerHTML = (firstNumber) * (secondNumber+1)
        document.getElementById("box1").innerHTML = (firstNumber - 1) * (secondNumber - 1)
        document.getElementById("box"+answerbox).innerHTML = answer
    };
    
//  Showing time, setting countdown and changing button contents
    
    document.getElementById("startreset").innerHTML = "Reset Game";
    document.getElementById("timeremaining").style.display = "block";
    var time = 60;  
    var counterbox = document.getElementById("timeremainingvalue")
    var countdown = setInterval(function(){if(counterbox.innerHTML>0){counterbox.innerHTML = time, time--}},1000);
    
// displaying outcome

        
}
}

            var scoreElement = document.getElementById("scorevalue") 
            var score = Number(scoreElement.innerHTML)

               function checkResult1(){
                if(answerbox == 1){
                document.getElementById("correct").style.display = "block"
                score += 1
                document.getElementById("scorevalue").innerHTML = score
            }else{
                document.getElementById("wrong").style.display = "block"
            }
        }
        function checkResult2(){
                if(answerbox == 2){
                document.getElementById("correct").style.display = "block"
                score += 1
                document.getElementById("scorevalue").innerHTML = score
            }else{
                document.getElementById("wrong").style.display = "block"
            }
        }
        function checkResult3(){
                if(answerbox == 3){
                document.getElementById("correct").style.display = "block"
                score += 1
                document.getElementById("scorevalue").innerHTML = score
            }else{
                document.getElementById("wrong").style.display = "block"
            }   
        }
        function checkResult4(){
                if(answerbox == 4){
                document.getElementById("correct").style.display = "block"
                score += 1
                document.getElementById("scorevalue").innerHTML = score
            }else{
                document.getElementById("wrong").style.display = "block"
            }
            
        }

    function nextGame(){
        document.getElementById("box1").innerHTML = ""
        document.getElementById("box2").innerHTML = ""
        document.getElementById("box3").innerHTML = ""
        document.getElementById("box4").innerHTML = ""
        document.getElementById("question").innerHTML=""
        document.getElementById("correct").style.display = "none"
        document.getElementById("wrong").style.display = "none"  
            var firstNumber = Math.round(Math.random()*10);
    var secondNumber = Math.round(Math.random()*10);
    if(firstNumber == 0){
        firstNumber +=2
    }else if(firstNumber == 1){
        firstNumber += 1
    };
    if(secondNumber == 0){
        secondNumber +=2
    }else if(secondNumber == 1){
        secondNumber += 1
    };
   question.innerHTML = firstNumber + " x " + secondNumber;
    
    var answer = firstNumber * secondNumber; 
  
// scattering answers in random boxes
    
    document.getElementById("box1").innerHTML = ""
    document.getElementById("box2").innerHTML = ""
    document.getElementById("box3").innerHTML = ""
    document.getElementById("box4").innerHTML = ""
    if (answerbox == 1){
        document.getElementById("box2").innerHTML = (firstNumber - 1) * (secondNumber)
        document.getElementById("box3").innerHTML = (firstNumber) * (secondNumber+1)
        document.getElementById("box4").innerHTML = (firstNumber - 1) * (secondNumber - 1)
        document.getElementById("box"+answerbox).innerHTML = answer
    }else if(answerbox == 2){
        document.getElementById("box1").innerHTML = (firstNumber - 1) * (secondNumber)
        document.getElementById("box3").innerHTML = (firstNumber) * (secondNumber+1)
        document.getElementById("box4").innerHTML = (firstNumber - 1) * (secondNumber - 1)
        document.getElementById("box"+answerbox).innerHTML = answer
    }else if(answerbox == 3){
        document.getElementById("box2").innerHTML = (firstNumber - 1) * (secondNumber)
        document.getElementById("box1").innerHTML = (firstNumber) * (secondNumber+1)
        document.getElementById("box4").innerHTML = (firstNumber - 1) * (secondNumber - 1)
        document.getElementById("box"+answerbox).innerHTML = answer
    }else if(answerbox == 4){
        document.getElementById("box2").innerHTML = (firstNumber - 1) * (secondNumber)
        document.getElementById("box3").innerHTML = (firstNumber) * (secondNumber+1)
        document.getElementById("box1").innerHTML = (firstNumber - 1) * (secondNumber - 1)
        document.getElementById("box"+answerbox).innerHTML = answer
    };
}
    
  


