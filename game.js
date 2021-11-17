const axios = require("axios").default;

const play = document.getElementById("play"); //This is the "Play Simone" button
const rounds = document.getElementById("rounds"); //This is the number of rounds enterd by the user
const statusbar = document.getElementById("status");
const redSq = document.getElementById("redSq");
const blueSq = document.getElementById("blueSq");
const greenSq = document.getElementById("greenSq");
const yellowSq = document.getElementById("yellowSq");
const body = document.querySelector("body");

const lose = new Audio("sounds/lose.wav");
const nextRound = new Audio("sounds/nextRound.wav");
const win = new Audio("sounds/win.mp3");
const wrong = new Audio("sounds/wrong.wav");

var numRounds = 10;
var input;

console.log(numRounds);

rounds.addEventListener("input", () => {
  numRounds = rounds.value;
});

play.addEventListener("click", async () => {
  await startSequence();
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
    new Audio("sounds/red.wav").play();
    redSq.classList.toggle("lightred");
  });
  blueSq.addEventListener("mousedown", async () => {
    blueSq.classList.toggle("lightblue");
  });
  blueSq.addEventListener("mouseup", async () => {
    new Audio("sounds/blue.wav").play();
    blueSq.classList.toggle("lightblue");
  });
  greenSq.addEventListener("mousedown", async () => {
    greenSq.classList.toggle("lightgreen");
  });
  greenSq.addEventListener("mouseup", async () => {
    new Audio("sounds/green.wav").play();
    greenSq.classList.toggle("lightgreen");
  });
  yellowSq.addEventListener("mousedown", async () => {
    yellowSq.classList.toggle("lightyellow");
  });
  yellowSq.addEventListener("mouseup", async () => {
    new Audio("sounds/yellow.wav").play();
    yellowSq.classList.toggle("lightyellow");
  });
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 4000)
  );
  playGame(numRounds);
});

async function startSequence() {
  var startSeq = await getStartSeq();
  for (var i = 0; i < startSeq.length; i++) {
    if (startSeq[i] == "R") {
      new Audio("sounds/red.wav").play();
      redSq.classList.toggle("lightred");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      redSq.classList.toggle("lightred");
    } else if (startSeq[i] == "B") {
      new Audio("sounds/blue.wav").play();
      blueSq.classList.toggle("lightblue");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      blueSq.classList.toggle("lightblue");
    } else if (startSeq[i] == "G") {
      new Audio("sounds/green.wav").play();
      greenSq.classList.toggle("lightgreen");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      greenSq.classList.toggle("lightgreen");
    } else if (startSeq[i] == "Y") {
      new Audio("sounds/yellow.wav").play();
      yellowSq.classList.toggle("lightyellow");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 120)
      );
      yellowSq.classList.toggle("lightyellow");
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 120)
    );
  }
}

async function playGame(numRounds) {
  var gameSeq = await getGameSeq(numRounds);
  var sequence = new Array();
  var curRound = 0;
  var keepPlaying = true;

  while (keepPlaying) {
    sequence.push(gameSeq[curRound]);
    for (var i = 0; i < sequence.length; i++) {
      if (gameSeq[i] == "R") {
        new Audio("sounds/red.wav").play();
        redSq.classList.toggle("lightred");
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(redSq.classList.toggle("lightred"));
          }, 400)
        );
      } else if (gameSeq[i] == "B") {
        new Audio("sounds/blue.wav").play();
        blueSq.classList.toggle("lightblue");
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(blueSq.classList.toggle("lightblue"));
          }, 400)
        );
      } else if (gameSeq[i] == "G") {
        new Audio("sounds/green.wav").play();
        greenSq.classList.toggle("lightgreen");
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(greenSq.classList.toggle("lightgreen"));
          }, 400)
        );
      } else if (gameSeq[i] == "Y") {
        new Audio("sounds/yellow.wav").play();
        yellowSq.classList.toggle("lightyellow");
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(yellowSq.classList.toggle("lightyellow"));
          }, 400)
        );
      }
      if (sequence.length > 1) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 400)
        );
      }
    }

    keepPlaying = await userGuess(sequence);

    if (sequence.length == gameSeq.length && keepPlaying == true) {
      win.play();
      body.style.backgroundColor = "DeepSkyBlue";
      statusbar.innerHTML = "Yay you win!";
      keepPlaying = false;
      break;
    }
    if (keepPlaying == true) {
      statusbar.innerHTML = "Good job! Prepare for the next round.";
      nextRound.play();
      if (i + 2 != gameSeq.length + 1) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(
              (statusbar.innerHTML = `Round ${curRound + 2} of ${
                gameSeq.length
              }`)
            );
          }, 800)
        );
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 800)
      );
      curRound++;
    } else {
      statusbar.innerHTML = "Incorrect! You lose!";
      await wrong.play();
      body.style.backgroundColor = "hotpink";
      await lose.play();
      break;
    }
  }
}

async function userGuess(sequence) {
  for (var i = 0; i < sequence.length; i++) {
    await new Promise((resolve) => {
      redSq.addEventListener("click", async () => {
        input = "R";
        resolve(input);
      });
      blueSq.addEventListener("click", async () => {
        input = "B";
        resolve(input);
      });
      greenSq.addEventListener("click", async () => {
        input = "G";
        resolve(input);
      });
      yellowSq.addEventListener("click", async () => {
        input = "Y";
        resolve(input);
      });
    });
    if (input != sequence[i]) {
      return false;
    }
    input = "";
    guessesLeft = 0;
  }
  return true;
}

async function getStartSeq() {
  try {
    const resp = await axios.get(
      "http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=start"
    );
    return resp.data.sequence;
  } catch (err) {
    console.error(err);
  }
}

async function getGameSeq(roundCount) {
  try {
    let resp = await axios.get(
      `http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=getSolution&rounds=${roundCount}`
    );
    return resp.data.key;
  } catch (err) {
    console.error(err);
  }
}
