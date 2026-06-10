// =========================
// Task 1,2,4,5,7,8
// =========================

const playlists = [];

let editIndex = -1;

const form = document.getElementById("playlist-form");

const playlistList = document.getElementById("playlist-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("playlist-name").value;

  const description = document.getElementById("playlist-description").value;

  if (editIndex === -1) {
    playlists.push({
      name,
      description,
    });
  } else {
    playlists[editIndex] = {
      name,
      description,
    };

    editIndex = -1;
  }

  renderPlaylists();

  form.reset();
});

function renderPlaylists() {
  playlistList.innerHTML = "";

  playlists.forEach((playlist, index) => {
    playlistList.innerHTML += `
        <div class="playlist-card">
          <h3>${playlist.name}</h3>

          <p>
            ${playlist.description}
          </p>

          <button onclick="editPlaylist(${index})">
            Edit
          </button>

          <button onclick="deletePlaylist(${index})">
            Delete
          </button>
        </div>
      `;
  });
}

function deletePlaylist(index) {
  playlists.splice(index, 1);

  renderPlaylists();
}

function editPlaylist(index) {
  document.getElementById("playlist-name").value = playlists[index].name;

  document.getElementById("playlist-description").value =
    playlists[index].description;

  editIndex = index;
}
