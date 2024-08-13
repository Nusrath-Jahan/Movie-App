// Function to add event listeners for "Read More" and star rating
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
  