const imagedata = document.querySelector("#formFileSm");

const firsName = document.querySelector("#first_name");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#inputCity");

const phone = document.querySelector("#inputPhone");


function addUser(){
    
}


function insertRow() {
  // Get a reference to the table's body
  var table = document.querySelector(".table").getElementsByTagName("tbody")[0];

  var newRow = table.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  cell1.innerHTML = '<img src="./pic.avif" alt="profile_pic" />';
  cell2.innerHTML = "Muhammad";
  cell3.innerHTML = "Ammad";
  cell4.innerHTML = "03128656214";
  cell5.innerHTML = "Sargodha";
}

insertRow();
