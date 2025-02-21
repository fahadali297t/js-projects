const imagedata = document.querySelector("#formFileSm");

const img = document.querySelector(".image");

const firsName = document.querySelector("#first_name");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#inputCity");

const phone = document.querySelector("#inputPhone");

const save = document.getElementById("Save");

console.log(img.src);
save.addEventListener("click", () => {
  insertRow();
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

  cell2.innerHTML = firsName.value;
  cell3.innerHTML = lastName.value;
  cell4.innerHTML = phone.value;
  cell5.innerHTML = city.value;
  cell1.innerHTML = '<img class="image" alt="profile_pic" />';
  imagedata.onchange = () => {
    let newSource = img.src;
    newSource = URL.createObjectURL(imagedata.files[0]);
    document.querySelector(".image").src = URL.createObjectURL(
      imagedata.files[0]
    );
  };
}
