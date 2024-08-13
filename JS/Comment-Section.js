// Function to create the comment section
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
