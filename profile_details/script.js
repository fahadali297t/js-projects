const imagedata = document.querySelector("#formFileSm");

const img = document.querySelector(".image");

const firsName = document.querySelector("#first_name");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#inputCity");

const phone = document.querySelector("#inputPhone");

const save = document.getElementById("Save");
const btnDelete = document.getElementById("delete");
const btnEdit = document.getElementById("edit");
//
let imageInput = document.querySelector(".image_input").files[0];

let imageURL = "";
if (imageInput) {
  imageURL = URL.createObjectURL(imageInput);
}
console.log(imageURL);
//
console.log(img.src);
save.addEventListener("click", () => {
  insertRow();
});
btnDelete.addEventListener("click", () => {
  deleteRow();
});
function insertRow() {
  // Get a reference to the table's body
  var table = document.querySelector(".table").getElementsByTagName("tbody")[0];

  var newRow = table.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  cell1.innerHTML = `${imageURL ? `<img src="${imageURL}">` : "No Image"}`;
  cell2.innerHTML = firsName.value;
  cell3.innerHTML = lastName.value;
  cell4.innerHTML = phone.value;
  cell5.innerHTML = city.value;
  cell6.innerHTML = `                <button class="btn btn-danger" id="delete" onclick="deleteRow(this)">
                  <i class="fa-solid fa-trash"></i></button
                ><br /><button class="btn btn-success mt-3" id="edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>`;
}

function deleteRow() {
  btnDelete.parentElement.parentElement.remove();
}
