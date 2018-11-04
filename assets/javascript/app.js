var x;
var trivia = {
    
    set:[ {
      question1: "What does Mabel's bed smell like?",
      answers: ["Shampoo","Graham crackers and pine needles","yarn and animal fur","pig and glitter"],
      correct: 1,
    },
    {
        question1: "What's the name Dipper always wanted?",
        answers: ["Dennis","Trevor","Dante","Tyrone"],    
        correct: 3,

      },
      {
        question1:"What did the dog say backwards when Mabel had too much Smile dip?",
        answers: ["Don't trust Grunkle","Leave the Falls","Beware Him","You Will Perish"],    
        correct: 0,

      },
      {
        question1: "What year is Blendin Blandin from?",
        answers: ["Twenty-bleventy-thriteen","Twenty-syneventy-twelve","Twenty-seven-eleventeen","Twenty-bloobenty-ten"],    
        correct: 1,

      },
       {
        question1:"Which of the following is true?",
        answers: ["Mabel is 3 minutes older than Dipper","Dipper is 3 minutes older than Mabel","Mabel is 5 minutes older than Dipper","Dipper is 5 minutes older than Mabel"],    
        correct: 2,

      },
       {
        question1: "To escape, Mabel told LOLPH she was his _________ grandmother?",
        answers: ["Great, great, great, great, great, great,great","Great, great, great, great, great, great","Great, great, great, great, great, great,great, great","Great, great, great, great"],    
        correct: 0,
        
      },
      {
        question1: "What is the name of Mabel's pig",
        answers: ["Piggly","Waddles","Mister Wiggles","Porkers"],    
        correct: 1,
        
      },
      {
        question1: "What was on Dipper's original cap?",
        answers: ["A skull","A Tree","A star","A triangle"],    
        correct: 2,
        
      },
      {
        question1: "How much does Mabel's pig weigh?",
        answers: ["8 Pounds","10 Pounds","12 Pounds","15 Pounds"],    
        correct: 3,
        
      },
      {
        question1: "What is Mabel's go to weapon?",
        answers: ["Bat","Grappling Hook","Leafblower","Sword"],    
        correct: 1,
        
      },
      {
        question1: "Who does Mabel end up kissing?",
        answers: ["Mermando","Gabe","Several Timez","Norman"],    
        correct: 0,
        
      },
      {
        question1: "What aspect of Mabel changes in every episode?",
        answers: ["Her hair","Her shoes","Her shirt","Her sweater"],    
        correct: 3,
        
      },
      {
        question1: "Which of these is NOT a television show in the show",
        answers: ["Duck-tective","Why You Ackin' SO Cray-Cray","Grampa the Kid","Lamby Lamb"],    
        correct: 3,
        
      },
    ],




      startgif:"https://media.giphy.com/media/JsnbYw3mMgObe/giphy.gif",
      correctgifs:["assets/images/correct1.gif","assets/images/correct2.gif","assets/images/correct3.gif","assets/images/correct4.gif","assets/images/correct5.gif","assets/images/correct6.gif","assets/images/correct7.gif","assets/images/correct8.gif","assets/images/correct9.gif","assets/images/correct10.gif",],
      incorrectgifs:["assets/images/incorrect1.gif","assets/images/incorrect2.gif","assets/images/incorrect3.gif","assets/images/incorrect4.gif","assets/images/incorrect5.gif","assets/images/incorrect6.gif","assets/images/incorrect7.gif","assets/images/incorrect8.gif","assets/images/incorrect9.gif","assets/images/incorrect10.gif","assets/images/incorrect11.gif"],
total:[],
gifs:[],
num: Math.floor(Math.random()*13),
corgifs: Math.floor(Math.random()*10),
ingifs: Math.floor(Math.random()*11),
numberCorrect:0,
numberIncorrect:0,
timeleft:10,
tryAgain: document.getElementById("tryAgain"),
question: document.getElementById("question"),
answers1: document.getElementById("answer1"),
answers2: document.getElementById("answer2"),
answers3: document.getElementById("answer3"),
answers4: document.getElementById("answer4"),
block: document.getElementById("block"),
answerBlock: document.getElementById("answers"),
top: document.getElementById("top1"),
modal: document.getElementById("myModal"),
btn: document.getElementById("myBtn"),
show: document.getElementById("show"),
revealCorrect: document.getElementById("revealCorrect"),
revealIncorrect: document.getElementById("revealIncorrect"),
pic: document.getElementById("pic"),
time: document.getElementById("time"),
outoftime: document.getElementById("notime"),
results: document.getElementById("results"),
end: document.getElementById("end"),
showa: document.getElementById("showanswer1"),
endGame: function(){
    trivia.top.style.display="none";
    trivia.answerBlock.style.display="none";
    trivia.results.style.display="block";
    trivia.end.style.display="block";
    document.getElementById("C").innerHTML+=trivia.numberCorrect;
    document.getElementById("I").innerHTML+=trivia.numberIncorrect;

    clearInterval(x);

},

play: function(){
    trivia.timeleft=10;
    trivia.top.style.display="block";
     trivia.answerBlock.style.display="block";
     trivia.revealCorrect.style.display="none";
     trivia.outoftime.style.display="none";
     trivia.revealIncorrect.style.display="none";
     trivia.show.style.display="none";
     trivia.end.style.display="none";
     trivia.results.style.display="none";

    if(trivia.total.length>9)
    {
        trivia.endGame();
    }
    else{
    trivia.num= Math.floor(Math.random()*13);
    
    while(trivia.total.indexOf(trivia.num)>=0){
        trivia.num= Math.floor(Math.random()*13);
    }

        clearInterval(x);
    x = setInterval(function() {
        trivia.timeleft--;
          
            document.getElementById("time").innerHTML = "Time left:"+trivia.timeleft;
            
            if (trivia.timeleft < 0) {
                clearInterval(x);
                trivia.outOfTime();
                //time expired make function
            }
        }, 1000);
    trivia.print(trivia.set[trivia.num]);
    trivia.total.push(trivia.num);
    }
},


outOfTime: function(){
trivia.outoftime.style.display="block";
trivia.top.style.display="none";
trivia.answerBlock.style.display="none";
//trivia.revealIncorrect.style.display="block";
trivia.show.style.display="block";
while(trivia.gifs.indexOf(trivia.ingifs)>=0){
  //  console.log("boo");

    trivia.ingifs= Math.floor(Math.random()*8);
}

document.getElementById("pic").src = trivia.incorrectgifs[trivia.ingifs];
trivia.gifs.push(trivia.ingifs);

// document.getElementById("pic").src = ;
document.getElementById("showanswer1").innerHTML = "The Correct Answer is: "+trivia.set[trivia.num].answers[trivia.set[trivia.num].correct];
trivia.numberIncorrect++;
setTimeout(trivia.play,3000);
},


print: function(a){
    trivia.time.innerHTML="Time left:"+trivia.timeleft;
    trivia.question.textContent=a.question1;
    trivia.answers1.textContent=a.answers[0];
    trivia.answers2.textContent=a.answers[1];
    trivia.answers3.textContent=a.answers[2];
    trivia.answers4.textContent=a.answers[3];
},


 checkAnswer: function(number){
     trivia.top.style.display="none";
     trivia.answerBlock.style.display="none";
     trivia.show.style.display="block";
    trivia.timeleft=10;
if(trivia.set[trivia.num].correct==number){
    trivia.revealCorrect.style.display="block";
    trivia.show.style.display="block";

    while(trivia.gifs.indexOf(trivia.corgifs)>=0){
        console.log("yay");
        trivia.corgifs= Math.floor(Math.random()*10);
    }
    trivia.gifs.push(trivia.corgifs);

    document.getElementById("pic").src = trivia.correctgifs[trivia.corgifs];

    console.log(trivia.corgifs);
    document.getElementById("showanswer1").innerHTML = "The Correct Answer is: "+trivia.set[trivia.num].answers[trivia.set[trivia.num].correct];
    trivia.numberCorrect++;
   setTimeout(trivia.play,3000);
    
}
else{
    trivia.revealIncorrect.style.display="block";
    trivia.show.style.display="block";
    while(trivia.gifs.indexOf(trivia.ingifs)>=0){
        console.log("boo");

        trivia.ingifs= Math.floor(Math.random()*11);
    }

    document.getElementById("pic").src = trivia.incorrectgifs[trivia.ingifs];
    trivia.gifs.push(trivia.ingifs);

  // document.getElementById("pic").src = ;
  document.getElementById("showanswer1").innerHTML = "The Correct Answer is: "+trivia.set[trivia.num].answers[trivia.set[trivia.num].correct];

  trivia.numberIncorrect++;

    setTimeout(trivia.play,3000);


}

 },



    
  };
  
  trivia.btn.addEventListener("click", function() {
    trivia.modal.style.display = "none";
    trivia.play();
    

});
  
 trivia.answers1.addEventListener("click", function() {
    trivia.timeleft=0;

    trivia.checkAnswer(0);
});

trivia.answers2.addEventListener("click", function() {
    trivia.timeleft=0;

    trivia.checkAnswer(1);

});

trivia.answers3.addEventListener("click", function() {
    trivia.timeleft=0;

    trivia.checkAnswer(2);

});

trivia.answers4.addEventListener("click", function() {
    trivia.timeleft=0;

    trivia.checkAnswer(3);
});
trivia.tryAgain.addEventListener("click", function(){
    document.location.reload();

})