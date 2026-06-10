function addPlaylist() {
  const name = document.getElementById("playlistName").value;

  const description = document.getElementById("playlistDescription").value;

  if (!name.trim() || !description.trim()) {
    document.getElementById("error").textContent = "All fields are required";

    return;
  }

  document.getElementById("error").textContent = "";

  console.log(name, description);
}
