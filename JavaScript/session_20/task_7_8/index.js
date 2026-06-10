function submitReview() {
  const review = document.getElementById("review").value;

  if (!review.trim()) {
    document.getElementById("error").textContent = "Review cannot be empty";

    return;
  }

  document.getElementById("error").textContent = "";

  console.log(review);
}
