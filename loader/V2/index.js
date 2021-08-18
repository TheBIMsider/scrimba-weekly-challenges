// Challenge instructions

// Wire up the loader so that it spins

// Stretch goals:

// 1. Add a timer
// 2. Change the loader style

const loadBtn = document.getElementById("btn");
const loader = document.getElementById("loader");
const loading = document.getElementById("loading");
const loaded = document.getElementById("loaded");

loadEventListeners();
function loadEventListeners() {
  loadBtn.addEventListener("click", hideLoader);
  loadBtn.addEventListener("click", spinLoader);
  loadBtn.addEventListener("click", spinLoaded);
  loadBtn.addEventListener("click", timer);
}
function hideLoader() {
  loader.style.display = "none";
}
function spinLoader() {
  loading.style.display = "block";
}
function spinLoaded() {
  loaded.style.display = "none";
}
function timer() {
  let timeleft = 10;
  let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      loading.style.display = "none";
      loaded.style.display = "block";
      document.getElementById("countdown").innerHTML = "Changed!";
    } else {
      document.getElementById("countdown").innerHTML =
        "Changing in " + timeleft;
    }
    timeleft -= 1;
  }, 1000);
}
