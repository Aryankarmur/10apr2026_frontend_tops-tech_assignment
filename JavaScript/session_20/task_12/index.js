function submitReview() {
  const review = document.getElementById("review").value;

  const rating = Number(document.getElementById("rating").value);

  if (!review.trim()) {
    document.getElementById("error").textContent = "Review is required";

    return;
  }

  if (rating < 1 || rating > 5) {
    document.getElementById("error").textContent =
      "Rating must be between 1 and 5";

    return;
  }

  document.getElementById("error").textContent = "";
}
