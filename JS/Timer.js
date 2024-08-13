const startTimerBtn = document.getElementById("start-timer");
const timeSpent = document.getElementById("time-spent");
const timerInput = document.getElementById("timer-input");
const countdownTimer = document.getElementById("countdown-timer");
let countdownInterval;
let timeSpentInterval;


// Function to start a countdown timer
function startCountdown(duration) {
  let timer = duration * 60;
  countdownInterval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    countdownTimer.textContent = `Time left: ${minutes}m ${seconds}s`;
    if (--timer < 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Make your movie selection now.");
    }
  }, 1000);
}

// Function to start the timer based on user input
function startTimer() {
  const minutes = parseInt(timerInput.value);
  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }
  countdownTimer.textContent = "";
  clearInterval(countdownInterval);
  startCountdown(minutes);
}

startTimerBtn.addEventListener("click", startTimer);

// Function to track the time spent on the page
function startTimeSpent() {
  let timer = 0;
  timeSpentInterval = setInterval(() => {
    timer++;
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timeSpent.textContent = `Timer ${minutes}m ${seconds}s`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  startTimeSpent();
});
