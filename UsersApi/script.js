const Url = "https://dummyjson.com/users";
let accordinElement = document.getElementById("accordionExample");

let statment = "";
let UsersData = [];
// variables end

// fetch Api Data
async function getData() {
  try {
    const response = await fetch(Url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// main code
getData().then((data) => {
  let usersArr = data.users;
  data.users.forEach((element) => {
    // push data in own array
    UsersData.push({
      id: element.id,
      firstName: element.firstName,
      lastName: element.lastName,
      maidenName: element.maidenName,
      age: element.age,
      gender: element.gender,
      email: element.email,
      phone: element.phone,
      username: element.username,
      password: element.password,
      birthDate: element.birthDate,
      bloodGroup: element.bloodGroup,
      height: element.height,
      weight: element.weight,
      eyeColor: element.eyeColor,
      image: element.image,
      // address
      address: {
        address: element.address.address,
        city: element.address.city,
        state: element.address.state,
        country: element.address.country,
      },
      // education
      university: element.university,
      // bank details
      bank: {
        cardExpire: element.bank.cardExpire,
        cardNumber: element.bank.cardNumber,
        cardType: element.bank.cardType,
        currency: element.bank.currency,
        iban: element.bank.iban,
      },
      // work company Details
      company: {
        department: element.company.department,
        name: element.company.name,
        title: element.company.title,
        // company Address
        address: {
          address: element.company.address.address,
          city: element.company.address.city,
          state: element.company.address.state,
          country: element.company.address.country,
        },
      },
      crypto: {
        coin: element.crypto.coin,
        wallet: element.crypto.wallet,
        network: element.crypto.network,
      },
      role: element.role,
    });
    // used to display the repeatedly
  });
  UsersData.map((e) => {
    displayUsers(e);
  });
});
// functions
function displayUsers(element) {
  statment += `<div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${element.id}"
            aria-expanded="false"
            aria-controls="collapse${element.id}"
          >
           ${element.firstName}
          </button>
        </h2>
        <div
          id="collapse${element.id}"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">

          

                    <div class="container rounded bg-white ">
      <div class="row">
        <div class="col-lg-3 col-md-12 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="${element.image}"
            /><span class="font-weight-bold name">${
              element.firstName + " " + element.lastName
            }</span
            ><span class="text-black-50 email">${element.email}</span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="text-right">Basic Info</h2>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <h4>${element.firstName + " " + element.lastName}</h4>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <p><strong>UserName:</strong> ${element.username}</p>
              </div>
              <div class="col-md-12">
                <p><strong>Phone:</strong> ${element.phone}</p>
              </div>
              <div class="col-md-12">
                <p><strong>Age:</strong> ${element.age}</p>
              </div>
              <div class="col-md-12">
                <p><strong>Birth Date:</strong> ${element.birthDate}</p>
              </div>
              <div class="col-md-12">
                <p><strong>Gender:</strong> ${element.gender}</p>
              </div>
              <div class="col-md-12">
                <p><strong>Blood Group:</strong> ${element.bloodGroup}</p>
              </div>
              <div class="col-md-12">
                <p><strong>Height:</strong> ${element.height} cm</p>
              </div>
              <div class="col-md-12">
                <p><strong>Height:</strong> ${element.weight} kg</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-12">
                <h2>Address Details:</h2>
              </div>
              <div class="col-md-6">
                <p><strong>Street:</strong> ${element.address.address}</p>
                <p><strong>City:</strong> ${element.address.city}</p>
                <p><strong>State:</strong> ${element.address.state}</p>
                <p><strong>Country:</strong> ${element.address.country}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="py-5">
            <div
              class="d-flex justify-content-between align-items-center experience"
            >
              <h2>Bank Details</h2>
            </div>
            <br />
            <div class="col-md-12">
              <p><strong>Card Type:</strong> ${element.bank.cardType}</p>
            </div>
            <div class="col-md-12">
              <p><strong>Card Number:</strong> ${element.bank.cardNumber}</p>
            </div>
            <div class="col-md-12">
              <p><strong>Card Expiry:</strong> ${element.bank.cardExpire}</p>
            </div>
            <div class="col-md-12">
              <p><strong>IBAN:</strong> ${element.bank.iban}</p>
            </div>
            <div class="col-md-12">
              <p><strong>Currency:</strong> ${element.bank.currency}</p>
            </div>
          </div>
          <div>
            <div
              class="d-flex justify-content-between align-items-center experience"
            >
              <h2>WorkPlace Details</h2>
            </div>
            <br />
            <div class="col-md-12">
              <p><strong>Company Name :</strong> ${element.company.name}</p>
            </div>
            <div class="col-md-12">
              <p><strong>Department:</strong> ${element.company.department}</p>
            </div>
            <div class="col-md-12">
              <p><strong>Title:</strong> ${element.company.title}</p>
            </div>
            <div class="col-md-12">
              <p><strong>Company Address:</strong> ${
                element.company.address.address +
                ", " +
                element.company.address.city +
                ", " +
                element.company.address.state +
                ", " +
                element.company.address.country
              }</p>
            </div>
            <div class="col-md-12">
              <p><strong>Role:</strong> ${element.role}</p>
            </div>
          </div>
          <div class="py-5">
            <div
              class="d-flex justify-content-between align-items-center experience"
            >
              <h2>Education</h2>
            </div>
            <br />
            <div class="col-md-12">
              <p><strong>University :</strong> ${element.university}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


     
          </div>
        </div>
      </div>`;
  accordinElement.innerHTML = statment;
}
