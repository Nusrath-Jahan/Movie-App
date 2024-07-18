import { movies } from "./arrayList.js";

const nowStreaming = document.querySelector(".streaming");
const startTimerBtn = document.getElementById("start-timer");
const timerInput = document.getElementById("timer-input");
const countdownTimer = document.getElementById("countdown-timer");
const timeSpent = document.getElementById("time-spent");
let countdownInterval;
let timeSpentInterval;


function createMovieCard(movie) {
  const movieContainer = createMovieContainer();
  const movieElements = createMovieElements(movie);
  const movieDetails = createMovieDetails(movie);
  const commentSection = createCommentSection();

  movieContainer.appendChild(movieElements.img);
  movieContainer.appendChild(movieElements.readMoreBtn);
  movieContainer.appendChild(movieElements.starRating);
  movieContainer.appendChild(movieDetails);
  movieDetails.appendChild(commentSection);

  addEventListeners(
    movieElements.readMoreBtn,
    movieDetails,
    movieElements.stars
  );

  return movieContainer;
}

function createMovieContainer() {
  const movieContainer = document.createElement("div");
  movieContainer.className = "movie-container";
  return movieContainer;
}

function createMovieElements(movie) {
  // Create image element
  const img = document.createElement("img");
  img.className = "movie-img";
  img.src = movie.poster_url;

  // Create button element
  const readMoreBtn = document.createElement("button");
  readMoreBtn.textContent = "Read more";
  readMoreBtn.className = "read-more-button";

  // Create star rating element
  const starRating = document.createElement("div");
  starRating.className = "star-rating";

  const numberOfStars = 5;
  let stars = [];

  for (let x = 0; x < numberOfStars; x++) {
    const star = document.createElement("i");
    star.className = "rating__star far fa-star";
    starRating.appendChild(star);
    stars.push(star);
  }

  return { img, readMoreBtn, starRating, stars };
}

function createMovieDetails(movie) {
  const movieDetails = document.createElement("div");
  movieDetails.className = "movie-details";
  movieDetails.style.display = "none";
  movieDetails.style.color = "white";
  movieDetails.innerHTML = `
    <p><strong>Title:</strong> ${movie.title}</p>
    <p><strong>Description:</strong> ${movie.description}</p>
    <p><strong>Release Year:</strong> ${movie.movie_year}</p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
  `;
  return movieDetails;
}

function createCommentSection() {
  const commentSection = document.createElement("div");
  commentSection.innerHTML = "Comments: ";
  commentSection.style.fontWeight = "bold";
  commentSection.className = "comment-section";

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.value = "";
  commentInput.placeholder = "Add a Comment";
  commentInput.style.color = "white";

  const commentButton = document.createElement("button");
  commentButton.className = "comment-button";
  commentButton.innerHTML = "Submit";

  const comments = document.createElement("div");
  comments.className = "comments";
  const commentUl = document.createElement("ul");

  commentButton.addEventListener("click", () => {
    if (commentInput.value) {
      const comment = document.createElement("li");
      comment.textContent = commentInput.value;
      commentUl.appendChild(comment);
      commentInput.value = "";
    }
    comments.appendChild(commentUl);
  });

  commentSection.appendChild(commentInput);
  commentSection.appendChild(commentButton);
  commentSection.appendChild(comments);

  return commentSection;
}

function addEventListeners(readMoreBtn, movieDetails, stars) {
  readMoreBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    if (movieDetails.style.display === "block") {
      movieDetails.style.display = "none";
    } else {
      movieDetails.style.display = "block";
    }
  });

  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  stars.forEach((star, clickedStarIndex) => {
    star.onclick = () => {
      stars.forEach((star, starIndex) => {
        if (starIndex <= clickedStarIndex) {
          star.className = starClassActive;
        } else {
          star.className = starClassInactive;
        }
      });
    };
  });
}

function displayMovies(moviesArray) {
  nowStreaming.innerHTML = "";
  moviesArray.forEach((movie) => {
    const movieElement = createMovieCard(movie);
    nowStreaming.appendChild(movieElement);
  });
}

function searchMovies(keyword) {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

function sortMovies(property, ascending = true) {
  return movies.slice().sort((a, b) => {
    if (a[property] < b[property]) {
      return ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayMovies(movies);

  const searchInput = document.getElementById("keyword-search");
  searchInput.placeholder = "Search by title...";
  searchInput.oninput = (e) => {
    const filteredMovies = searchMovies(e.target.value);
    displayMovies(filteredMovies);
  };

  const sortSelect = document.getElementById("sort-options");
  sortSelect.onchange = (e) => {
    const sortedMovies = sortMovies(e.target.value);
    displayMovies(sortedMovies);
  };
  startTimeSpent();
});
//--------------------------------------------------
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

function startTimeSpent() {
  let timer = 0;
  timeSpentInterval = setInterval(() => {
    timer++;
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timeSpent.textContent = `Time spent on this page: ${minutes}m ${seconds}s`;
  }, 1000);
}

startTimerBtn.addEventListener("click", startTimer);

