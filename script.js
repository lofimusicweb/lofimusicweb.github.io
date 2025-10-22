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
        file: "/LOFI001/05 The Effervescing Backwaters Of Du.mp3",
      },
      {
        name: "Gizmo Is The Star",
        duration: "3:30",
        file: "/LOFI001/06 Gizmo Is The Star.mp3",
      },
      {
        name: "A Walk In The Snow",
        duration: "1:02",
        file: "/LOFI001/07 A Walk In The Snow.mp3",
      },
      {
        name: "Friend",
        duration: "2:21",
        file: "/LOFI001/08 Friend.mp3",
      },
      {
        name: "Crumbs!",
        duration: "2:55",
        file: "/LOFI001/09 Crumbs!.mp3",
      },
      {
        name: "Venal",
        duration: "4:49",
        file: "/LOFI001/10 Venal.mp3",
      },
      {
        name: "Shopping Polka",
        duration: "2:59",
        file: "/LOFI001/11 Shopping Polka.mp3",
      },
      {
        name: "The Nocturnal Haggis",
        duration: "0:55",
        file: "/LOFI001/12 The Nocturnal Haggis.mp3",
      },
      {
        name: "It's All Right",
        duration: "2:32",
        file: "/LOFI001/13 It's All Right.mp3",
      },
      {
        name: "Juan",
        duration: "1:16",
        file: "/LOFI001/14 Juan.mp3",
      },
      {
        name: "Astral Tribe",
        duration: "3:08",
        file: "/LOFI001/15 Astral Tribe.mp3",
      },
      {
        name: "Belief",
        duration: "2:02",
        file: "/LOFI001/16 Belief.mp3",
      },
      {
        name: "Friday (Bake 3 People Remix)",
        duration: "6:11",
        file: "/LOFI001/17 Friday (Bake 3 People Remix).mp3",
      },
      {
        name: "Strap",
        duration: "1:14",
        file: "/LOFI001/18 Strap.mp3",
      },
      {
        name: "Babe",
        duration: "1:37",
        file: "/LOFI001/19 Babe.mp3",
      },
      {
        name: "11:30",
        duration: "0:13",
        file: "/LOFI001/20 11_30.mp3",
      },
      {
        name: "Nell' Ombra Dei Fantasmi",
        duration: "1:28",
        file: "/LOFI001/21 Nell' Ombra Dei Fantasmi.mp3",
      },
      {
        name: "Dead Go Dancing",
        duration: "4:19",
        file: "/LOFI001/22 Dead Go Dancing.mp3",
      },
      {
        name: "Warm Milk, Somebody & Me",
        duration: "0:49",
        file: "/LOFI001/23 Warm Milk, Somebody & Me.mp3",
      },
      {
        name: "My Heart Is Like A Shield Of Steel",
        duration: "1:45",
        file: "/LOFI001/24 My Heart Is Like A Shield Of Stee.mp3",
      },
      {
        name: "Looking Out For You",
        duration: "5:35",
        file: "/LOFI001/25 Looking Out For You.mp3",
      },
      {
        name: "Murder By Merengue",
        duration: "1:31",
        file: "/LOFI001/26 Murder By Merengue.mp3",
      },
    ],
  },
  {
    id: 2,
    name: "Piccoli Incidenti",
    year: 2001,
    cover: "/LOFI002/damcover.jpg?height=300&width=300",
    tracks: [
      {
        name: "The First Move",
        duration: "2:42",
        file: "/LOFI002/01 The First Move.mp3",
      },
      {
        name: "Traveller",
        duration: "3:09",
        file: "/LOFI002/02 Traveller.mp3",
      },
      {
        name: "Fallen Tree",
        duration: "3:19",
        file: "/LOFI002/03 Fallen Tree.mp3",
      },
      {
        name: "Around The Moon For Posterity",
        duration: "2:23",
        file: "/LOFI002/04 Around The Moon For Posterity.mp3",
      },
      {
        name: "Eyekneadewe",
        duration: "1:47",
        file: "/LOFI002/05 Eyekneadewe.mp3",
      },
      {
        name: "Mellow Days",
        duration: "3:48",
        file: "/LOFI002/06 Mellow Days.mp3",
      },
      { name: "Maybe I", duration: "3:42", file: "/LOFI002/07 Maybe I.mp3" },
      {
        name: "We'll Become",
        duration: "1:48",
        file: "/LOFI002/08 We'll Become.mp3",
      },
      {
        name: "Unfortunate Timing",
        duration: "2:16",
        file: "/LOFI002/09 Unfortunate Timing.mp3",
      },
      {
        name: "Well Alright",
        duration: "3:18",
        file: "/LOFI002/10 Well Alright.mp3",
      },
      {
        name: "Being Free",
        duration: "4:09",
        file: "/LOFI002/11 Being Free.mp3",
      },
      {
        name: "Disco Lights",
        duration: "2:35",
        file: "/LOFI002/12 Discolights.mp3",
      },
    ],
  },
  {
    id: 3,
    name: "Coffee And Ideas",
    year: 2001,
    cover: "/LOFI003/cai cover.png?height=300&width=300",
    tracks: [
      {
        name: "The Body Language Says",
        duration: "4:27",
        file: "/LOFI003/01 The Body Language Says.mp3",
      },
      {
        name: "Fechtin",
        duration: "3:28",
        file: "/LOFI003/02 Fechtin.mp3",
      },
      {
        name: "Coffee And Ideas",
        duration: "3:46",
        file: "/LOFI003/03 Coffee And Ideas.mp3",
      },
      {
        name: "Eyes",
        duration: "3:27",
        file: "/LOFI003/04 Eyes.mp3",
      },
      {
        name: "First Day Of Winter",
        duration: "3:02",
        file: "/LOFI003/05 First Day Of Winter.mp3",
      },
      {
        name: "Technophobiac",
        duration: "1:39",
        file: "/LOFI003/06 Technophobiac.mp3",
      },
      {
        name: "Lousy Christmas",
        duration: "2:36",
        file: "/LOFI003/07 Lousy Christmas.mp3",
      },
      {
        name: "Five Fingers",
        duration: "2:41",
        file: "/LOFI003/08 Five Fingers.mp3",
      },
      {
        name: "Hide",
        duration: "1:11",
        file: "/LOFI003/09 Hide.mp3",
      },
      {
        name: "Wish Watching",
        duration: "2:42",
        file: "/LOFI003/10 Wish Watching.mp3",
      },
      {
        name: "Swimming",
        duration: "1:22",
        file: "/LOFI003/11 Swimming.mp3",
      },
      {
        name: "Strange Feelings",
        duration: "3:28",
        file: "/LOFI003/12 Strange Feelings.mp3",
      },
    ],
  },
  {
    id: 4,
    name: "Happiness. Shared.",
    year: 2002,
    cover: "/LOFI004/hs.jpg?height=300&width=300",
    tracks: [
      {
        name: "Happiness. Shared.",
        duration: "0:00",
        file: "/LOFI004/01 Happiness Shared.mp3",
      },
      {
        name: "You See, They Know How To Unwind",
        duration: "0:00",
        file: "/LOFI004/02 You See They Know How To Unwind.mp3",
      },
      { name: "I Stop", duration: "0:00", file: "/LOFI004/03 I Stop.mp3" },
      { name: "Irn Bru", duration: "0:00", file: "/LOFI004/04 Irn Bru.mp3" },
    ],
  },
  {
    id: 5,
    name: "Citizen Awake",
    year: 2003,
    cover: "/LOFI005/ca.jpg?height=300&width=300",
    tracks: [
      {
        name: "A Bottle Of Red Wine In The Park",
        duration: "0:00",
        file: "/LOFI005/01 A Bottle Of Red Wine In The Park.mp3",
      },
      {
        name: "April In Amsterdam",
        duration: "0:00",
        file: "/LOFI005/02 April In Amsterdam.mp3",
      },
      {
        name: "Change From 3 Points Of View",
        duration: "0:00",
        file: "/LOFI005/03 Change From 3 Points Of View.mp3",
      },
      {
        name: "Spot The Difference",
        duration: "0:00",
        file: "/LOFI005/04 Spot The Difference.mp3",
      },
      {
        name: "Wintersong",
        duration: "0:00",
        file: "/LOFI005/05 Wintersong.mp3",
      },
      {
        name: "Far Off Cry",
        duration: "0:00",
        file: "/LOFI005/06 Far Off Cry.mp3",
      },
      { name: "Snowfall", duration: "0:00", file: "/LOFI005/07 Snowfall.mp3" },
      {
        name: "Why I Ran In Fear Of My Life",
        duration: "0:00",
        file: "/LOFI005/08 Why I Ran In Fear Of My Life.mp3",
      },
      { name: "Tall Oak", duration: "0:00", file: "/LOFI005/09 Tall Oak.mp3" },
      {
        name: "It's A Beautiful World",
        duration: "0:00",
        file: "/LOFI005/10 It's A Beautiful World.mp3",
      },
    ],
  },
  {
    id: 6,
    name: "Montague's Lunchtime Speciale",
    year: 2004,
    cover: "/LOFI006/mls cover.jpg?height=300&width=300",
    tracks: [
      {
        name: "Music Here Tonight",
        duration: "0:00",
        file: "/LOFI006/01 Music Here Tonight.mp3",
      },
      {
        name: "Tin Hearts",
        duration: "0:00",
        file: "/LOFI006/02 Tin Hearts.mp3",
      },
      {
        name: "Soup",
        duration: "0:00",
        file: "/LOFI006/03 Soup.mp3",
      },
      {
        name: "My Funny Valentine",
        duration: "0:00",
        file: "/LOFI006/04 My Funny Valentine.mp3",
      },
      {
        name: "The Distance",
        duration: "0:00",
        file: "/LOFI006/05 The Distance.mp3",
      },
      {
        name: "A Breather",
        duration: "0:00",
        file: "/LOFI006/06 A Breather.mp3",
      },
      {
        name: "Your Wide Eyes",
        duration: "0:00",
        file: "/LOFI006/07 Your Wide Eyes.mp3",
      },
      {
        name: "Siren",
        duration: "0:00",
        file: "/LOFI006/08 Siren.mp3",
      },
      {
        name: "Bite",
        duration: "0:00",
        file: "/LOFI006/09 Bite.mp3",
      },
      {
        name: "A Shambles",
        duration: "0:00",
        file: "/LOFI006/10 A Shambles.mp3",
      },
      {
        name: "You Know Why You're Here",
        duration: "0:00",
        file: "/LOFI006/11 You Know Why You're Here.mp3",
      },
    ],
  },
  {
    id: 7,
    name: "Dirty Little",
    year: 2004,
    cover: "/LOFI007/dirty little cover.jpg?height=300&width=300",
    tracks: [
      {
        name: "Can I Be The One?",
        duration: "0:00",
        file: "/LOFI007/01 Can I Be The One_.mp3",
      },
      {
        name: "Irn Bru 2006",
        duration: "0:00",
        file: "/LOFI007/02 Irn Bru 2006.mp3",
      },
      {
        name: "Here Come The Free Radicals",
        duration: "0:00",
        file: "/LOFI007/03 Here Come The Free Radicals.mp3",
      },
      {
        name: "Cheery Big Black Cloud Of Death",
        duration: "0:00",
        file: "/LOFI007/04 Cheery Big Black Cloud of Death.mp3",
      },
      {
        name: "Armpit",
        duration: "0:00",
        file: "/LOFI007/05 Armpit.mp3",
      },
      {
        name: "Delicately Balanced",
        duration: "0:00",
        file: "/LOFI007/06 Delicately Balanced.mp3",
      },
      {
        name: "2, 3.. 4, 5!",
        duration: "0:00",
        file: "/LOFI007/07 2,3..4,5!.mp3",
      },
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
  //updatePlayButton();
  isPlaying ? audioPlayer.play() : audioPlayer.pause();

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
