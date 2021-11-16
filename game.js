// const axios = require("axios").default;

const play = document.getElementById("play"); //This is the "Play Simone" button
const rounds = document.getElementById("rounds"); //This is the number of rounds enterd by the user
const status = document.getElementById("status");
const redSq = document.getElementById("redSq");
const blueSq = document.getElementById("blueSq");
const greenSq = document.getElementById("greenSq");
const yellowSq = document.getElementById("yellowSq");

const redSound = new Audio("sounds/red.wav");
const blueSound = new Audio("sounds/blue.wav");
const greenSound = new Audio("sounds/green.wav");
const yellowSound = new Audio("sounds/yellow.wav");

var numRounds;
var input;

rounds.addEventListener("input", () => {
  numRounds = rounds.value;
});

play.addEventListener("click", async () => {
  startSequence();
  redSq.addEventListener("mouseover", () => {
    redSq.classList.toggle("hover");
  });
  redSq.addEventListener("mouseout", () => {
    redSq.classList.toggle("hover");
  });
  blueSq.addEventListener("mouseover", () => {
    blueSq.classList.toggle("hover");
  });
  blueSq.addEventListener("mouseout", () => {
    blueSq.classList.toggle("hover");
  });
  greenSq.addEventListener("mouseover", () => {
    greenSq.classList.toggle("hover");
  });
  greenSq.addEventListener("mouseout", () => {
    greenSq.classList.toggle("hover");
  });
  yellowSq.addEventListener("mouseover", () => {
    yellowSq.classList.toggle("hover");
  });
  yellowSq.addEventListener("mouseout", () => {
    yellowSq.classList.toggle("hover");
  });
  redSq.addEventListener("mousedown", async () => {
    redSq.classList.toggle("lightred");
  });
  redSq.addEventListener("mouseup", async () => {
    redSq.classList.toggle("lightred");
  });
  blueSq.addEventListener("mousedown", async () => {
    blueSq.classList.toggle("lightblue");
  });
  blueSq.addEventListener("mouseup", async () => {
    blueSq.classList.toggle("lightblue");
  });
  greenSq.addEventListener("mousedown", async () => {
    greenSq.classList.toggle("lightgreen");
  });
  greenSq.addEventListener("mouseup", async () => {
    greenSq.classList.toggle("lightgreen");
  });
  yellowSq.addEventListener("mousedown", async () => {
    yellowSq.classList.toggle("lightyellow");
  });
  yellowSq.addEventListener("mouseup", async () => {
    yellowSq.classList.toggle("lightyellow");
  });
});

const startSeq = ["R", "Y", "B", "G", "R", "Y", "B", "G", "R", "Y", "B", "G"];
const gameSeq = ["B", "B", "G", "Y"];

async function startSequence() {
  for (var i = 0; i < startSeq.length; i++) {
    if (startSeq[i] == "R") {
      redSound.play();
      redSq.classList.toggle("lightred");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      redSq.classList.toggle("lightred");
    } else if (startSeq[i] == "B") {
      blueSound.play();
      blueSq.classList.toggle("lightblue");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      blueSq.classList.toggle("lightblue");
    } else if (startSeq[i] == "G") {
      greenSound.play();
      greenSq.classList.toggle("lightgreen");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      greenSq.classList.toggle("lightgreen");
    } else if (startSeq[i] == "Y") {
      yellowSound.play();
      yellowSq.classList.toggle("lightyellow");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      yellowSq.classList.toggle("lightyellow");
    }
  }
}

async function playGame(numRounds) {
  var sequence = new Array();
  var count = 0;

  sequence.push(gameSeq[count]);

  for (var i = 0; i < sequence.length; i++) {
    if (gameSeq[i] == "R") {
      redSound.play();
      redSq.classList.toggle("lightred");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      redSq.classList.toggle("lightred");
    } else if (gameSeq[i] == "B") {
      blueSound.play();
      blueSq.classList.toggle("lightblue");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      blueSq.classList.toggle("lightblue");
    } else if (gameSeq[i] == "G") {
      greenSound.play();
      greenSq.classList.toggle("lightgreen");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      greenSq.classList.toggle("lightgreen");
    } else if (gameSeq[i] == "Y") {
      yellowSound.play();
      yellowSq.classList.toggle("lightyellow");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      yellowSq.classList.toggle("lightyellow");
    }
  }

  var cont = await userGuess(sequence);

  if (sequence.length == gameSeq.length && cont == true) {
    //they win!
  } else if (cont == true) {
    //they go again
  } else {
    //they lose
  }
}

async function userGuess(sequence) {
  await new Promise((resolve) => {
    var guessesLeft = sequence.length;
    for (var i = 0; i < guessesLeft; i++) {
      if (guessesLeft != sequence.length) {
        status.innerHTML = `So far so good! ${guessesLeft} more to go!`;
      }
      redSq.addEventListener("click", () => {
        input = "R";
        resolve(input);
      });
      blueSq.addEventListener("click", () => {
        input = "B";
        resolve(input);
      });
      greenSq.addEventListener("click", () => {
        input = "G";
        resolve(input);
      });
      yellowSq.addEventListener("click", () => {
        input = "Y";
        resolve(input);
      });
    }
  });
  if (input == sequence[i]) {
    return true;
  }
  return false;
}
