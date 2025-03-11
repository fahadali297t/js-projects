function check() {
  let input = document.getElementById("input").value;
  let output = document.querySelector("#output");

  let cleanedInput = input.replace(/[^A-Za-z0-9]/g, "");
  let reversed = cleanedInput.split("").reverse().join("");

  if (cleanedInput.toLowerCase() === reversed.toLowerCase()) {
    output.innerHTML = "The word is a palindrom";
  } else {
    output.innerHTML = "The word is not a palindrom";
  }
}
