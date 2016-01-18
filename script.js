
var listen = document.getElementById("submitButton");
listen.addEventListener("click", radios);

function radios(){
    var totalScore = 0;
    for (var i = 1; i<13; i++){
        var string = 'r'+i;
        var radioB = document.getElementById(string);
        if(radioB.checked){
            totalScore += +radioB.value;
        }
    }
    console.log(totalScore, 'clicked');
}



// totalScore = totalScore*10;

//if (totalScore > 6){
//    document.write('Pat on the back for you! Your score is '+totalScore);
//} else if (totalScore > 3) {
//    document.write('Almost there! Your score is '+totalScore);
//} else if (totalScore > 0) {
//    document.write('Go to the gym Your score is '+totalScore);
//} else {
//    document.write('Call an ambulance Your score is '+totalScore);
//}
