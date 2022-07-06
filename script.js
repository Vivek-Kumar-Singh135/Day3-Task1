var guess = Math.floor(Math.random() * 100) + 1
console.log(guess);
console.log("js called");

function playGame() {
    var ip = document.getElementById("num").value
    console.log(ip);

    if (ip == "" || ip > 100 || ip < 1) {
        document.getElementById("num").value = ""
        document.getElementById("result").innerText = "Invalid Input";
    } else {
        var ip = parseInt(document.getElementById("num").value)
        console.log(ip);
        document.getElementById("num").value = ""
        if (ip == guess) {
            document.getElementById("result").innerText = "Bingo!!! You got it correct";
            console.log("correct");
        } else if (ip < guess) {
            document.getElementById("result").innerText = "Guess a Higher Number";
            console.log("higher");
        } else if (ip > guess) {
            document.getElementById("result").innerText = "Guess a Lower Number";
            console.log("lower");
        }
    }
}