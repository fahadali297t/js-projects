const btn = document.querySelectorAll(".btn");
const disp = document.querySelector(".display");
let string = "";

let arrayBtn = Array.from(btn);

disp.textContent = string;

arrayBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "C") {
      string = "";
      disp.textContent = string;
    } else if (e.target.innerHTML === "=") {
      string = eval(string);
      disp.textContent = string;
    } else {
      string += e.target.innerHTML;
      disp.textContent = string;
    }
  });
});
