document.getElementById("submitButton").addEventListener("click", radios);

var totalScore = 0;

// Cycling through radio buttons and adding  value to totalScore if checked.
function radios(){
    for (var i = 1; i<13; i++){
        var string = 'r'+i;
        var radioB = document.getElementById(string);
        if(radioB.checked){
            totalScore += +radioB.value;
        }
    }
    // Converting totalScore to percentage (rounded and then turned back to integer)
    percentScore = +((totalScore/9)*100).toFixed();
    // Writing text output to result div
    if (totalScore > 6){
        document.getElementById('results').innerHTML += 'Pat on the back for you! Your score is '+percentScore+'%!';
    } else if (totalScore > 3) {
        document.getElementById('results').innerHTML += 'Almost there! Your score is '+percentScore+'%!';
    } else if (totalScore > 0) {
        document.getElementById('results').innerHTML += 'Go to the gym! Your score is '+percentScore+'%!';
    } else {
        document.getElementById('results').innerHTML += 'Call an ambulance! Your score is '+percentScore+'%!';
    }
}
