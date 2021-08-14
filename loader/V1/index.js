// Challenge instructions

// Wire up the loader so that it spins

// Stretch goals:

// 1. Add a timer
// 2. Change the loader style

const loadBtn = document.getElementById("btn");
const loader = document.getElementById("loader");
const loading = document.getElementById("loading");

loadEventListeners()
function loadEventListeners(){
  loadBtn.addEventListener('click', hideLoader)
  loadBtn.addEventListener('click', spinLoader)
  }
  function hideLoader() {
    loader.style.display = "none";
    }
  function spinLoader() {
    loading.style.display = "block";
    }
  
