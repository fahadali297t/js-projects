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

getData()
  .then((data) => {
    let usersArr = data.users;
    usersArr.forEach((element) => {
      console.log(element);
      displayUsers(element);
    });
  })
  .catch((error) => {
    console.log(error);
  });

function displayUsers(element) {
  statment += `<div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${element.id}"
            aria-expanded="true"
            aria-controls="collapse${element.id}"
          >
            ${element.firstName}
          </button>
        </h2>
        <div
          id="collapse${element.id}"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body"></div>
        </div>
      </div>`;
  accordinElement.innerHTML = statment;
}
