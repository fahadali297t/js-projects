const container = document.querySelector(".container");
let disp = document.querySelector(".display");
const newRow1 = document.createElement("div");
newRow1.classList.add("row", "row1");
container.appendChild(newRow1);

const newRow2 = document.createElement("div");
newRow2.classList.add("row", "row2");
container.appendChild(newRow2);

const newRow3 = document.createElement("div");
newRow3.classList.add("row", "row3");
container.appendChild(newRow3);

const newRow4 = document.createElement("div");
newRow4.classList.add("row", "row4");
container.appendChild(newRow4);

const newRow5 = document.createElement("div");
newRow5.classList.add("row", "row5");
container.appendChild(newRow5);

let string = "";
disp.textContent = string;

function createButton(val, row) {
  const newBtn = document.createElement("button");
  newBtn.textContent = val;
  newBtn.classList.add("btn");

  row.appendChild(newBtn);

  newBtn.addEventListener("click", () => {
    if (val === "=") {
      string = eval(string).toString();
      disp.textContent = string;
    } else if (val === "C") {
      string = "";
      disp.textContent = string;
    } else {
      string += val;
      disp.textContent = string;
    }
  });
}

createRowButtons(newRow1, ["7", "8", "9", "*"]);
createRowButtons(newRow2, ["4", "5", "6", "/"]);
createRowButtons(newRow3, ["1", "2", "3", "+"]);
createRowButtons(newRow4, ["0", ".", "C", "-"]);
createRowButtons(newRow5, ["="]);

function createRowButtons(row, buttons) {
  buttons.forEach((val) => createButton(val, row));
}
