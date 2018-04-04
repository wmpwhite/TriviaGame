// Javascript for Trivia game

var secondsLeft = 120;
var intervalId;
var qAndA;
var possibles = [];

function runTime() {    
    intervalId = setInterval(decrementTime, 1000);
  }

function decrementTime() {
    secondsLeft--;
    $("#time").html("<h3>" + secondsLeft + "</h3>");
    if (secondsLeft === 0) {        
        alert("Time is up.")
        clearInterval(intervalId);
    }
};

runTime();

var qAndA = {
    questions: ["The first State to secede from the Union was:","The Civil War was started when Confederates attacked:","The President of the Confederacy was:","The war started in:","The President of the United States during the war was:","The bloodiest battle of the war was:","The leader of Union forces at the Battle of Gettysburg was:","The Civil War ended in:","The war effectively ended when Robert E Lee surrendered his army to:","When the war began in the population of the United States was approximately:"],
    answers: ["South Carolina","Fort Sumter","Jefferson Davis","1861","Abraham Lincoln","Gettysburg","George Meade","1865","Ulysses S. Grant","31,000,000"]
}

possibles[0] = ["Virginia","South Carolina","Georgia","Mississippi"];
possibles[1] = ["Washington DC","Fort Donelson","Fort Sumter","Gettysburg"];
possibles[2] = ["Edmund Ruffin","Jefferson Davis","John Calhoun","Robert E. Lee"];
possibles[3] = ["1859","1860","1861","1862"];
possibles[4] = ["Abraham Lincoln","James Buchanan","Andrew Johnson","Ulysses S.Grant"];
possibles[5] = ["Antietam","Shiloh","Vicksburg","Gettysburg"];
possibles[6] = ["George Meade","George Custer","George McClellan","George Bush"];
possibles[7] = ["1864","1865","1866","1867"];
possibles[8] = ["George McClellan","Abraham Lincoln","William Tecumseh Sherman","Ulysses S. Grant"];
possibles[9] = ["24 Million","31 Million","42 Million","50 Million"];


for (var k = 0; k < qAndA.questions.length; k++ ) {
    console.log(qAndA.questions[k]);
    console.log(qAndA.answers[k]);
}



for (var i = 0; i < qAndA.questions.length; i++) {
     for (var j = 0; j < 4; j++) {
        console.log(possibles[i][j]);
     }
}

for (var m = 0; m < qAndA.questions.length; m++) {
    for (var n = 0; n < 4; n++) {
        if (qAndA.answers[m] == possibles[m][n]) {
            console.log(qAndA.answers[m]);          
        }
        
            // console.log("Error at index " + m)
    }
}
