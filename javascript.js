function game() {
    document.turn = "red";
    document.winner = null;
}
function newTurn(coin) {
    if (document.winner != null) {
        message("");
    } else {
        if (coin.innerText == "") {
            coin.style.backgroundColor = document.turn;
            console.log(document);
            switchTurn();
        } else {
            // messageSpace("");
            // alert("oh no. don't do that.");
            var body = document.querySelector("body");
            body.innerHTML = "you lose";
            body.style.color = "yellow";
            body.style.backgroundColor = "red";
        }
    }
}

function switchTurn() {
    if (document.turn == "red") {
        document.turn = "blue";
    } else {
        document.turn = "red";
    }
}
function isWin() {
    // var pieces = document.getElementById("game-board");
    // for (const pie in pieces) {
    //     pie.querySelector("square").addEventListener("click", () => {
    //         if (pie == 4) {
    //             alert("win");
    //         }
    //     });
    // }
}

// newTurn(coin);
// switchTurn();

window.addEventListener("load", game);
