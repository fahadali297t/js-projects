let tbody = document.querySelector(".tbody");
let usersArr = [];
const savebtn = document.querySelector("#Save");

savebtn.addEventListener("click", () => {
  saveInfo();
});

function saveInfo() {
  let firstName = document.querySelector("#first_name").value;
  let lastName = document.querySelector("#lastName").value;
  let city = document.getElementById("inputCity").value;
  let phoneNumber = document.querySelector("#inputPhone").value;
  usersArr.push({
    firstName: firstName,
    lastName: lastName,
    city: city,
    phoneNumber: phoneNumber,
  });
  console.log(usersArr);
  let content = "";
  usersArr.forEach((e) => {
    content += `<tr>
              <td>${e.firstName}</td>
              <td>${e.lastName}</td>
              <td>${e.phoneNumber}</td>
              <td>${e.city}</td>
              <td>
                <button
                  class="btn btn-danger"
                  id="delete"
                  onclick="deleteRow(this)"
                >
                  <i class="fa-solid fa-trash"></i></button
                ><br /><button class="btn btn-success mt-3" id="edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
            </tr>`;
  });
  tbody.innerHTML = content;
}
