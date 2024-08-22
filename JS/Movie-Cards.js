   

    function createMovieCard(movie) {
      //Create a container to store movie details
      const movieDataContainer = document.createElement("div");
      movieDataContainer.className = "movieDataContainer";

      const movieContainer = document.createElement("div");
      movieContainer.className = "movie-container";

      //  Create an img element and set its src attribute
      const img = document.createElement("img");
      img.className = "movie-img";
      img.width = 200;
      img.src = movie.poster_url;

      // Create a button element
      const readMoreBtn = document.createElement("button");
      readMoreBtn.textContent = "Read More";
      readMoreBtn.className = "read-more-button";

      // starRating
      const starRating = document.createElement("div");
      starRating.className = "star-rating";
      const numberOfStars = 5;
      const stars = [];

      for (let x = 0; x < numberOfStars; x++) {
      const star = document.createElement("i");
      star.className = "rating__star far fa-star";
      starRating.appendChild(star);
      stars.push(star);
      }
      const starClassActive = "rating__star fas fa-star";
      const starClassInactive = "rating__star far fa-star";
      stars.forEach((star, clickedStarIndex) => {
      star.addEventListener("click", () => {
          stars.forEach((star, starIndex) =>
          starIndex <= clickedStarIndex
              ? (star.className = starClassActive)
              : (star.className = starClassInactive)
          );
      });
      });

      movieContainer.appendChild(img);
      movieContainer.appendChild(readMoreBtn);
      movieContainer.appendChild(starRating);
      movieDataContainer.appendChild(movieContainer);

      // Create element to show details about the movie
      const storeMovieDetail = document.createElement("div");
      storeMovieDetail.className = "storeMovieDetail";

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

      storeMovieDetail.appendChild(movieDetails);
      movieDataContainer.appendChild(storeMovieDetail);

      // Adding the comment Section

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
          const comments = JSON.parse(localStorage.getItems("comments"));
          localStorage.setItem("comments", JSON.stringify(comment.textContent));
          }
      });

      document.addEventListener("DOMContentLoaded", () => {
          const storedComments =
          JSON.parse(localStorage.getItem("comments")) || [];
          console.log(storedComments);
          storedComments.forEach((storedComment) => {
          const oldComment = document.createElement("li");
          oldComment.textContent = storedComment;
          commentUl.appendChild(oldComment);
          });
      });
      // append
      comments.appendChild(commentUl);
      commentSection.appendChild(commentInput);
      commentSection.appendChild(commentButton);
      commentSection.appendChild(comments);
      movieDetails.appendChild(commentSection);
      }
      createCommentSection();

      function toggleMovie() {
      {
          this.classList.toggle("active");
          /* Toggle between hiding and showing the active panel */
          if (movieDetails.style.display === "block") {
          movieDetails.style.display = "none";
          movieDataContainer.style.display = "inline-block";
          } else {
          movieDetails.style.display = "block";
          movieDataContainer.style.display = "flex";
          }
      }
      }

      readMoreBtn.addEventListener("click", toggleMovie);
      img.addEventListener("click", toggleMovie);
      return movieDataContainer;
  }
