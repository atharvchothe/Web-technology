let time = 25 * 60; // 25 minutes
let timer;
let isRunning = false;
let isStudy = true;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;

    timer = setInterval(() => {
        time--;
        updateDisplay();

        if (time <= 0) {
            clearInterval(timer);
            playSound();

            if (isStudy) {
                time = 5 * 60; // break
                document.getElementById("status").innerText = "Break Time";
            } else {
                time = 25 * 60; // study
                document.getElementById("status").innerText = "Study Time";
            }

            isStudy = !isStudy;
            isRunning = false;
        }

    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    time = 25 * 60;
    isRunning = false;
    isStudy = true;

    document.getElementById("status").innerText = "Study Time";
    updateDisplay();
}

function playSound() {
    let audio = new Audio("alert.mp3"); // optional file
    audio.play();
}

// initial display
updateDisplay();