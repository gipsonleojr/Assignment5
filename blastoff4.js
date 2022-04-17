// Function using loop to perform count down 0 to 10
function startofCountdown() {
    var currTime = 10;
    for (var i = 0; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //If statemenst output of blastoff once reaching 0
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 5) {
                //Else if statemenst output less than half way once reaching 5
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime -1;
            }, 1000 * i);
        } else {
               //else statemenst output of time left before reaching 0
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}