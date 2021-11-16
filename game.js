const play = document.getElementById("play"); //This is the "Play Simone" button
const rounds = document.getElementById("rounds").value; //This is the number of rounds enterd by the user
const statusBar = document.getElementById("status");
const redSq = document.getElementById("redSq");
const blueSq = document.getElementById("blueSq");
const greenSq = document.getElementById("greenSq");
const yellowSq = document.getElementById("yellowSq");

play.addEventListener("click", async () => {
  redSq.addEventListener("mouseover", () => {
    redSq.style.border = "solid #eeeeee .5px";
  });
  redSq.addEventListener("mouseout", () => {
    redSq.style.border = "none";
    redSq.style.backgroundColor = "#ff0000";
  });
  blueSq.addEventListener("mouseover", () => {
    blueSq.style.border = "solid #eeeeee .5px";
  });
  blueSq.addEventListener("mouseout", () => {
    blueSq.style.border = "none";
    blueSq.style.backgroundColor = "#0000bb";
  });
  greenSq.addEventListener("mouseover", () => {
    greenSq.style.border = "solid #eeeeee .5px";
  });
  greenSq.addEventListener("mouseout", () => {
    greenSq.style.border = "none";
    greenSq.style.backgroundColor = "forestgreen";
  });
  yellowSq.addEventListener("mouseover", () => {
    yellowSq.style.border = "solid #eeeeee .5px";
  });
  yellowSq.addEventListener("mouseout", () => {
    yellowSq.style.border = "none";
    yellowSq.style.backgroundColor = "goldenrod";
  });
  redSq.addEventListener("mousedown", async () => {
    redSq.style.backgroundColor = "hotpink";
  });
  redSq.addEventListener("mouseup", async () => {
    redSq.style.backgroundColor = "#ff0000";
  });
  blueSq.addEventListener("mousedown", async () => {
    blueSq.style.backgroundColor = "lightblue";
  });
  blueSq.addEventListener("mouseup", async () => {
    blueSq.style.backgroundColor = "#0000bb";
  });
  greenSq.addEventListener("mousedown", async () => {
    greenSq.style.backgroundColor = "lightgreen";
  });
  greenSq.addEventListener("mouseup", async () => {
    greenSq.style.backgroundColor = "forestgreen";
  });
  yellowSq.addEventListener("mousedown", async () => {
    yellowSq.style.backgroundColor = "yellow";
  });
  yellowSq.addEventListener("mouseup", async () => {
    yellowSq.style.backgroundColor = "goldenrod";
  });
});

const sequence = ["R", "Y", "B", "G", "R", "Y", "B", "G", "R", "Y", "B", "G"];

async function startSeq() {
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] == "R") {
      new Audio("sounds/red.wav").play();
      redSq.style.backgroundColor = "hotpink";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve((redSq.style.backgroundColor = "#ff0000"));
        }, 120)
      );
    } else if (sequence[i] == "B") {
      new Audio("sounds/blue.wav").play();
      blueSq.style.backgroundColor = "lightblue";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve((blueSq.style.backgroundColor = "#0000bb"));
        }, 120)
      );
    } else if (sequence[i] == "G") {
      new Audio("sounds/green.wav").play();
      greenSq.style.backgroundColor = "lightgreen";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve((greenSq.style.backgroundColor = "forestgreen"));
        }, 120)
      );
    } else if (sequence[i] == "Y") {
      new Audio("sounds/yellow.wav").play();
      yellowSq.style.backgroundColor = "yellow";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve((yellowSq.style.backgroundColor = "goldenrod"));
        }, 120)
      );
    }
  }
}
