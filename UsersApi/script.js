const Url = "https://dummyjson.com/users";
let accordinElement = document.getElementById("accordionExample");
let statment = "";
async function getData() {
  try {
    const response = await fetch(Url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

getData().then((data) => {
  let usersArr = data.users;
  usersArr.forEach((element) => {
    console.log(element);
    displayUsers(element);
  });
});

function displayUsers(element) {
  statment += `<div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            ${element.firstName}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body"></div>
        </div>
      </div>`;
  accordinElement.innerHTML = statment;
}
