let tbody = document.querySelector(".tbody");

let firstName = document.querySelector("#first_name");
let lastName = document.querySelector("#lastName");
let city = document.getElementById("inputCity");
let phoneNumber = document.querySelector("#inputPhone");

let usersArr = [];
let editId = null;
const savebtn = document.querySelector("#Save");

savebtn.addEventListener("click", () => {
  saveInfo();
  displayData();
  resetForm();
});
// Function used to insert or update a record

function saveInfo() {
  if (editId != null) {
    // update object record in array
    usersArr.splice(editId, 1, {
      firstName: firstName.value,
      lastName: lastName.value,
      city: city.value,
      phoneNumber: phoneNumber.value,
    });
    editId = null;
  } else {
    // Add record as array of object
    usersArr.push({
      firstName: firstName.value,
      lastName: lastName.value,
      city: city.value,
      phoneNumber: phoneNumber.value,
    });
  }
}
// Function used to make a new table row and put the data
function displayData() {
  let content = "";
  usersArr.forEach((obj, i) => {
    content += `<tr>
              <td>#${i + 1}</td>
              <td>${obj.firstName}</td>
              <td>${obj.lastName}</td>
              <td>${obj.phoneNumber}</td>
              <td>${obj.city}</td>
                         <td
              class="d-flex justify-content-center align-items-center gap-3 flex-lg-row flex-column"
            >
              <button
                class="btn btn-danger"
                id="delete"
                onclick="deleteData(${i})"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="edit"
                onclick="editData(${i})"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </td>
            </tr>`;
  });
  tbody.innerHTML = content;
}
// Function used to edit record at particular index of array
function editData(id) {
  firstName.value = usersArr[id].firstName;
  lastName.value = usersArr[id].lastName;
  city.value = usersArr[id].city;
  phoneNumber.value = usersArr[id].phoneNumber;
  editId = id;
}
// Function used to delete record at particular index of array

function deleteData(id) {
  usersArr.splice(id, 1);
  displayData();
}
// Function used to reset form fields

function resetForm() {
  firstName.value = "";
  lastName.value = "";
  city.value = "";
  phoneNumber.value = "";
}
