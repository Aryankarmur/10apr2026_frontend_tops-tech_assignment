let editIndex = null;

function getPlaylists() {
  return JSON.parse(localStorage.getItem("myPlaylists")) || [];
}

function savePlaylists(data) {
  localStorage.setItem("myPlaylists", JSON.stringify(data));
}

function validateURL(url) {
  return url.startsWith("https://") && url.includes(".");
}

function validateLink(url) {
  return (
    url.startsWith("https://") &&
    (url.includes("spotify.com") || url.includes("youtube.com"))
  );
}

function manageLink(linkObj, mode) {
  let playlists = getPlaylists();

  if (mode === "add") {
    playlists.push(linkObj);
  }

  if (mode === "edit") {
    playlists[editIndex] = linkObj;
  }

  savePlaylists(playlists);

  renderPlaylists();
}

function addPlaylistLink(linkObj) {
  manageLink(linkObj, "add");
}

function editPlaylistLink(index, newLinkObj) {
  editIndex = index;

  manageLink(newLinkObj, "edit");
}

function deletePlaylistLink(index) {
  const playlists = getPlaylists();

  playlists.splice(index, 1);

  savePlaylists(playlists);

  renderPlaylists();
}

function renderPlaylists() {
  const container = document.getElementById("playlistContainer");

  container.innerHTML = "";

  const playlists = getPlaylists();

  playlists.forEach((playlist, index) => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${playlist.name}</h3>

        <a href="${playlist.url}"
           target="_blank">
           Open Playlist
        </a>

        <div class="actions">
          <button onclick="loadEdit(${index})">
            Edit
          </button>

          <button onclick="deletePlaylistLink(${index})">
            Delete
          </button>
        </div>
      `;

    container.appendChild(card);
  });
}

function loadEdit(index) {
  const playlists = getPlaylists();

  const playlist = playlists[index];

  document.getElementById("playlistName").value = playlist.name;

  document.getElementById("playlistUrl").value = playlist.url;

  editIndex = index;
}

document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("playlistName").value.trim();

  const url = document.getElementById("playlistUrl").value.trim();

  const error = document.getElementById("error");

  if (!validateURL(url)) {
    error.textContent = "Invalid URL";

    return;
  }

  if (!validateLink(url)) {
    error.textContent = "Only Spotify or YouTube links allowed";

    return;
  }

  error.textContent = "";

  const playlist = {
    name,
    url,
  };

  if (editIndex === null) {
    addPlaylistLink(playlist);
  } else {
    editPlaylistLink(editIndex, playlist);

    editIndex = null;
  }

  document.getElementById("playlistName").value = "";

  document.getElementById("playlistUrl").value = "";
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light",
  );
}

document.getElementById("themeBtn").addEventListener("click", toggleTheme);

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

renderPlaylists();
