// Javascript for Trivia game

// Global variables initialized
var secondsLeft = 120;
var intervalId;
var qAndA;
var possibles = [];

// function to set interval and initiate countdown clock;
function runTime() {    
    intervalId = setInterval(decrementTime, 1000);
  }
// function to track time left display the current number of seconds, and check to see if time is zero, where the clock is stopped with an alert that time is up.
function decrementTime() {
    secondsLeft--;
    $("#time").html("<h3>" + secondsLeft + "</h3>");
    if (secondsLeft === 0) {        
        alert("Time is up.")
        clearInterval(intervalId);
    }
};
// call to start the timer
runTime();

// creates an object to store the quiz questions and answers
var qAndA = {
    questions: ["The first State to secede from the Union was:","The Civil War was started when Confederates attacked:","The President of the Confederacy was:","The war started in:","The President of the United States during the war was:","The bloodiest battle of the war was:","The leader of Union forces at the Battle of Gettysburg was:","The Civil War ended in:","The war effectively ended when Robert E Lee surrendered his army to:","When the war began in the population of the United States was approximately:"],
    answers: ["South Carolina","Fort Sumter","Jefferson Davis","1861","Abraham Lincoln","Gettysburg","George Meade","1865","Ulysses S. Grant","31,000,000"]
}
// creates a nested array that holds the 4 possible answers for each question.  Although I wasn't exactly sure (obviously) how to do it, my intention was to collect all the selected answers, perhaps by pushing them into another array, where the answer selected for the first question would be in the first position of the array and could easily be checked against the qAndA.answers[] array which would have the correct answer at the same array index number.  A simple loop through would allow us to compare if the two arrays are equal at each index position.

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


// Next I intended to dynamically add each question and its four possible answers onto the page.  This is where I hung up and failed miserably.  I could not find any combination of syntaxes that accomplished this for me.  As you can see from the browser, the questions and answers all pile up within their id locations rather than appending as a group and then moving down the page when the next iteration of the loop appended the next set of items.  I spent a lot of time at this point trying to accomplish this and never succeeded.  It was my roadblock to completion.  There would probably have been other challenges if I had gotten past this point, but this is the one that stopped me from completion.    

for (var m = 0; m < qAndA.questions.length; m++) {
    
    $("#question-asked").append("<h3>" + qAndA.questions[m] + "</h3");
    $("#ans-0").append(possibles[m][0]);
    $("#ans-1").append(possibles[m][1]);
    $("#ans-2").append(possibles[m][2]);
    $("#ans-3").append(possibles[m][3]);
    
        
}
