var zeroA = 0;

do {
    var a = Math.floor(Math.random() * 10) + 1

    zeroA = zeroA + a 

    alert(`Computer got Number ${a}\n\nComputer total is ${zeroA}`);
} while (zeroA < 16)

console.log(`Computer's total is ${zeroA}`);

var userInput = prompt("Would you like to pick a number? Yes or No?");

var zeroB = 0

if (userInput = "Yes") {
    do {
        var b = Math.floor(Math.random() * 10) + 1 

        zeroB = zeroB + b
    
        var another = prompt(`You got Number ${b}\n\nThis means your total is ${zeroB}. Would you like another number?`);
    } while ((zeroB < 16) && (another == "y"))
}
else if (userInput = "No") {
    alert("Then why did you start this program?");
}

console.log(`User's total is ${zeroB}`);

if ((zeroA > 20) && (zeroB <= 20)) {
    alert("The Computer went over 20, You Win!");
    console.log("User wins");
} else if ((zeroB > 20) && (zeroA <= 20)) {
    alert("You went over 20, Computer Wins!");
    console.log("Computer Wins");
} else if ((zeroB <= 20) && (zeroA <= 20) && (zeroB > zeroA)) {
    alert("You won!");
    console.log("User wins");
} else if ((zeroA <= 20) && (zeroB <= 20) && (zeroA > zeroB)) {
    alert("Computer Wins");
    console.log("Computer wins");
}






