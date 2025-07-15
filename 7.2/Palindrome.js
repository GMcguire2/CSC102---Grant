let loopInterval = null;

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}

function checkPalindromeOnce() {
  const inputField = document.getElementById("userInput");
  const resultField = document.getElementById("result");
  const input = inputField.value.trim();

  if (input === "") {
    resultField.innerHTML = "Please enter a value.";
    return false;
  }

  if (isPalindrome(input)) {
    resultField.innerHTML = `"<strong>${input}</strong>" is a palindrome.`;
  } else {
    resultField.innerHTML = `"<strong>${input}</strong>" is not a palindrome.`;
  }

  inputField.value = "";
  inputField.focus();

  return false; // Prevent form from refreshing page
}

// Loop-based checking
function startLoop() {
  if (loopInterval !== null) return; // Already looping

  loopInterval = setInterval(function() {
    const inputField = document.getElementById("userInput");
    const resultField = document.getElementById("result");
    const input = inputField.value.trim();

    if (input === "") {
      resultField.innerHTML = "Please enter a value before starting the loop.";
      return;
    }

    if (isPalindrome(input)) {
      resultField.innerHTML = `"<strong>${input}</strong>" is a palindrome. (Loop)`;
    } else {
      resultField.innerHTML = `"<strong>${input}</strong>" is not a palindrome. (Loop)`;
    }
  }, 2000); // Repeat every 2 seconds
}

function stopLoop() {
  if (loopInterval !== null) {
    clearInterval(loopInterval);
    loopInterval = null;
    document.getElementById("result").innerHTML = "loop stopped.";
  }
}