function check() {
  let word = document.getElementById("input").value;
  let reversed = word.split("").reverse().join("");
  let output = document.querySelector("#output");

  if (word.toLowerCase() === reversed.toLowerCase()) {
    output.innerHTML = "The word is a palindrom";
  } else {
    output.innerHTML = "The word is not a palindrom";
  }
}
