// Album data with tracks
const albums = [
  {
    id: 1,
    name: "The World In Bitesize Chunks #1",
    year: 2001,
    cover: "/LOFI001/TWIBC cover.jpg?height=300&width=300",
    tracks: [
      {
        name: "From Here To Somewhere Else",
        duration: "1:45",
        file: "/LOFI001/01 From Here To Somewhere Else.mp3",
      },
      {
        name: "Jerry Vale",
        duration: "0:54",
        file: "/LOFI001/02 Jerry Vale.mp3",
      },
      { name: "Someday", duration: "1:41", file: "/LOFI001/03 Someday.mp3" },
      {
        name: "Women And Their Makeup",
        duration: "2:13",
        file: "/LOFI001/04 Women And Their Makeup.mp3",
      },
      {
        name: "The Effervescing Backwaters Of Dunsinane",
        duration: "0:41",
        file: "/LOFI001/05 The Effervescing Backwaters Of Dunsinane.mp3",
      },
    ],
  },
  {
    id: 2,
    name: "Piccoli Incidenti",
    year: 2001,
    cover: "/LOFI002/damcover.jpg?height=300&width=300",
    tracks: [
      { name: "The First Move", duration: "4:02", file: "/audio/track6.mp3" },
      { name: "Traveller", duration: "3:36", file: "/audio/track7.mp3" },
      { name: "Fallen Tree", duration: "3:51", file: "/audio/track8.mp3" },
      {
        name: "Around The Moon For Posterity",
        duration: "4:28",
        file: "/audio/track9.mp3",
      },
      { name: "Eyekneadewe", duration: "2:44", file: "/audio/track10.mp3" },
      { name: "Mellow Days", duration: "2:44", file: "/audio/track10.mp3" },
      { name: "Maybe I", duration: "2:44", file: "/audio/track10.mp3" },
      { name: "We'll Become", duration: "2:44", file: "/audio/track10.mp3" },
      {
        name: "Unfortunate Timing",
        duration: "2:44",
        file: "/audio/track10.mp3",
      },
      { name: "Well Alright", duration: "2:44", file: "/audio/track10.mp3" },
      { name: "Being Free", duration: "2:44", file: "/audio/track10.mp3" },
      { name: "Disco Lights", duration: "2:44", file: "/audio/track10.mp3" },
    ],
  },
  {
    id: 3,
    name: "Sunset Chill",
    year: 2022,
    cover: "/placeholder.svg?height=300&width=300",
    tracks: [
      { name: "Golden Hour", duration: "3:55", file: "/audio/track11.mp3" },
      { name: "Beach Breeze", duration: "3:22", file: "/audio/track12.mp3" },
      { name: "Warm Memories", duration: "4:08", file: "/audio/track13.mp3" },
      { name: "Lazy Afternoon", duration: "3:41", file: "/audio/track14.mp3" },
      { name: "Dusk Till Dawn", duration: "4:15", file: "/audio/track15.mp3" },
    ],
  },
  {
    id: 4,
    name: "Urban Nights",
    year: 2022,
    cover: "/placeholder.svg?height=300&width=300",
    tracks: [
      { name: "Neon Glow", duration: "3:33", file: "/audio/track16.mp3" },
      { name: "Street Corner", duration: "3:47", file: "/audio/track17.mp3" },
      {
        name: "Late Night Drive",
        duration: "4:21",
        file: "/audio/track18.mp3",
      },
      { name: "Metro Rhythm", duration: "3:29", file: "/audio/track19.mp3" },
      { name: "Rooftop Views", duration: "3:58", file: "/audio/track20.mp3" },
    ],
  },
  {
    id: 5,
    name: "Morning Coffee",
    year: 2023,
    cover: "/placeholder.svg?height=300&width=300",
    tracks: [
      { name: "Sunrise Brew", duration: "3:12", file: "/audio/track21.mp3" },
      { name: "Fresh Start", duration: "3:38", file: "/audio/track22.mp3" },
      { name: "Breakfast Beats", duration: "3:54", file: "/audio/track23.mp3" },
      { name: "Morning Routine", duration: "3:26", file: "/audio/track24.mp3" },
      { name: "New Day", duration: "4:03", file: "/audio/track25.mp3" },
    ],
  },
  {
    id: 6,
    name: "Rainy Days",
    year: 2021,
    cover: "/placeholder.svg?height=300&width=300",
    tracks: [
      { name: "Raindrops", duration: "4:18", file: "/audio/track26.mp3" },
      { name: "Cozy Indoors", duration: "3:42", file: "/audio/track27.mp3" },
      {
        name: "Thunder Thoughts",
        duration: "3:56",
        file: "/audio/track28.mp3",
      },
      { name: "Window Watching", duration: "4:11", file: "/audio/track29.mp3" },
      { name: "Storm Passing", duration: "3:34", file: "/audio/track30.mp3" },
    ],
  },
  {
    id: 7,
    name: "Vintage Vibes",
    year: 2021,
    cover: "/placeholder.svg?height=300&width=300",
    tracks: [
      { name: "Vinyl Memories", duration: "3:48", file: "/audio/track31.mp3" },
      { name: "Old School Cool", duration: "3:25", file: "/audio/track32.mp3" },
      { name: "Retro Dreams", duration: "4:06", file: "/audio/track33.mp3" },
      { name: "Analog Love", duration: "3:39", file: "/audio/track34.mp3" },
      { name: "Throwback", duration: "3:52", file: "/audio/track35.mp3" },
    ],
  },
  {
    id: 8,
    name: "Cosmic Journey",
    year: 2022,
    cover: "/placeholder.svg?height=300&width=300",
    tracks: [
      { name: "Stellar Drift", duration: "4:24", file: "/audio/track36.mp3" },
      { name: "Galaxy Dreams", duration: "3:57", file: "/audio/track37.mp3" },
      { name: "Nebula Nights", duration: "4:13", file: "/audio/track38.mp3" },
      { name: "Orbit", duration: "3:31", file: "/audio/track39.mp3" },
      { name: "Cosmic Calm", duration: "4:08", file: "/audio/track40.mp3" },
    ],
  },
  {
    id: 9,
    name: "Autumn Leaves",
    year: 2021,
    cover: "/placeholder.svg?height=300&width=300",
    tracks: [
      { name: "Falling Slowly", duration: "3:44", file: "/audio/track41.mp3" },
      { name: "Harvest Moon", duration: "3:28", file: "/audio/track42.mp3" },
      { name: "Crisp Air", duration: "4:01", file: "/audio/track43.mp3" },
      { name: "Pumpkin Spice", duration: "3:36", file: "/audio/track44.mp3" },
      { name: "October Breeze", duration: "3:49", file: "/audio/track45.mp3" },
    ],
  },
  {
    id: 10,
    name: "Winter Warmth",
    year: 2023,
    cover: "/placeholder.svg?height=300&width=300",
    tracks: [
      { name: "Snowfall", duration: "4:16", file: "/audio/track46.mp3" },
      { name: "Fireside Chat", duration: "3:52", file: "/audio/track47.mp3" },
      { name: "Hot Cocoa", duration: "3:27", file: "/audio/track48.mp3" },
      { name: "Frozen Lake", duration: "4:05", file: "/audio/track49.mp3" },
      { name: "Winter Solstice", duration: "4:22", file: "/audio/track50.mp3" },
    ],
  },
];

// State
let currentAlbum = null;
let currentTrackIndex = 0;
let isPlaying = false;

// DOM Elements
const albumsGrid = document.getElementById("albumsGrid");
const mainContent = document.getElementById("mainContent");
const albumDetail = document.getElementById("albumDetail");
const backButton = document.getElementById("backButton");
const miniPlayer = document.getElementById("miniPlayer");
const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const progressInput = document.getElementById("progressInput");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// Initialize
function init() {
  renderAlbums();
  setupEventListeners();
}

// Render albums grid
function renderAlbums() {
  albumsGrid.innerHTML = albums
    .map(
      (album) => `
        <div class="album-card" data-album-id="${album.id}">
            <img class="album-cover" src="${album.cover}" alt="${album.name}">
            <div class="album-name">${album.name}</div>
            <div class="album-year">${album.year}</div>
        </div>
    `
    )
    .join("");

  // Add click listeners to album cards
  document.querySelectorAll(".album-card").forEach((card) => {
    card.addEventListener("click", () => {
      const albumId = parseInt(card.dataset.albumId);
      showAlbumDetail(albumId);
    });
  });
}

// Show album detail view
function showAlbumDetail(albumId) {
  currentAlbum = albums.find((a) => a.id === albumId);
  if (!currentAlbum) return;

  // Update album detail view
  document.getElementById("albumCoverLarge").src = currentAlbum.cover;
  document.getElementById("albumTitleLarge").textContent = currentAlbum.name;
  document.getElementById("albumYearLarge").textContent = currentAlbum.year;
  document.getElementById(
    "albumTracksCount"
  ).textContent = `${currentAlbum.tracks.length} tracks`;

  // Render tracks
  const tracksList = document.getElementById("tracksList");
  tracksList.innerHTML = currentAlbum.tracks
    .map(
      (track, index) => `
        <div class="track-item" data-track-index="${index}">
            <div class="track-number">${index + 1}</div>
            <div class="track-name">${track.name}</div>
            <div class="track-duration">${track.duration}</div>
        </div>
    `
    )
    .join("");

  // Add click listeners to tracks
  document.querySelectorAll(".track-item").forEach((item) => {
    item.addEventListener("click", () => {
      const trackIndex = parseInt(item.dataset.trackIndex);
      playTrack(trackIndex);
    });
  });

  // Show album detail, hide main content
  mainContent.style.display = "none";
  albumDetail.style.display = "block";
}

// Play track
function playTrack(trackIndex) {
  if (!currentAlbum) return;

  currentTrackIndex = trackIndex;
  const track = currentAlbum.tracks[trackIndex];

  // Update player info
  document.getElementById("playerCover").src = currentAlbum.cover;
  document.getElementById("playerTrack").textContent = track.name;
  document.getElementById("playerAlbum").textContent = currentAlbum.name;

  // Note: Since we don't have actual MP3 files, we'll simulate playback
  // In a real implementation, you would set: audioPlayer.src = track.file;

  // Show mini player
  miniPlayer.style.display = "flex";
  audioPlayer.src = track.file;

  // Update active track styling
  document.querySelectorAll(".track-item").forEach((item, index) => {
    if (index === trackIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Simulate playing (in real app, call audioPlayer.play())
  isPlaying = true;
  updatePlayButton();
  //simulateProgress(track.duration);
  audioPlayer.play();
}

// Simulate audio progress (since we don't have real MP3 files)
function simulateProgress(duration) {
  const [minutes, seconds] = duration.split(":").map(Number);
  const totalSeconds = minutes * 60 + seconds;
  let currentSeconds = 0;

  durationEl.textContent = duration;

  const interval = setInterval(() => {
    if (!isPlaying) {
      clearInterval(interval);
      return;
    }

    currentSeconds++;
    const progress = (currentSeconds / totalSeconds) * 100;
    progressFill.style.width = `${progress}%`;
    progressInput.value = progress;

    const mins = Math.floor(currentSeconds / 60);
    const secs = currentSeconds % 60;
    currentTimeEl.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

    if (currentSeconds >= totalSeconds) {
      clearInterval(interval);
      playNextTrack();
    }
  }, 1000);
}

// Play next track
function playNextTrack() {
  if (!currentAlbum) return;
  const nextIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
  playTrack(nextIndex);
}

// Play previous track
function playPreviousTrack() {
  if (!currentAlbum) return;
  const prevIndex =
    currentTrackIndex === 0
      ? currentAlbum.tracks.length - 1
      : currentTrackIndex - 1;
  playTrack(prevIndex);
}

// Toggle play/pause
function togglePlay() {
  isPlaying = !isPlaying;
  updatePlayButton();

  // In real implementation: isPlaying ? audioPlayer.play() : audioPlayer.pause();
}

// Update play button icon
function updatePlayButton() {
  if (isPlaying) {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}

// Format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Setup event listeners
function setupEventListeners() {
  // Back button
  backButton.addEventListener("click", () => {
    albumDetail.style.display = "none";
    mainContent.style.display = "block";
    currentAlbum = null;
  });

  // Player controls
  playButton.addEventListener("click", togglePlay);
  nextButton.addEventListener("click", playNextTrack);
  prevButton.addEventListener("click", playPreviousTrack);

  // Progress bar
  progressInput.addEventListener("input", (e) => {
    const value = e.target.value;
    progressFill.style.width = `${value}%`;
    // In real implementation: audioPlayer.currentTime = (value / 100) * audioPlayer.duration;
  });

  // Audio player events (for real implementation)
  audioPlayer.addEventListener("timeupdate", () => {
    if (audioPlayer.duration) {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progressFill.style.width = `${progress}%`;
      progressInput.value = progress;
      currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
  });

  audioPlayer.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
  });

  audioPlayer.addEventListener("ended", playNextTrack);
}

// Start the app
init();
