// Tasks: 

// - write the JS so that the word count appears on the screen
// - update the count as the user types

  // Stretch Goals:

  // - Display longest word
  // - Add spell check
  // - Add character count

  const input = document.getElementById("txtid");

  input.addEventListener("keyup", wordCounter);

  function wordCounter() {
    let text = input.value;
    let wordCount = 0;
    for (let i = 0; i <= text.length; i++) {
      if (text.charAt(i) == ' ') {
        wordCount++;
      } 
    }
    document.getElementById("count").innerHTML = wordCount;
  }