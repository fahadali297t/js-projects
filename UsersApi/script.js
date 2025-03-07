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
      hair: {
        color: element.hair.color,
        type: element.hair.type,
      },
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
    console.log(e);
    displayUsers(e);
  });
});
// functions
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
          <div class="accordion-body">

          

                    <div class="container rounded bg-white ">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            /><span class="font-weight-bold name">Edogaru</span
            ><span class="text-black-50 email">edogaru@mail.com.my</span>
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
                <p><strong>UserName:</strong> dummy</p>
              </div>
              <div class="col-md-12">
                <p><strong>Phone:</strong> 0332-6067339</p>
              </div>
              <div class="col-md-12">
                <p><strong>Age:</strong> 28</p>
              </div>
              <div class="col-md-12">
                <p><strong>Birth Date:</strong> 12-March-2002</p>
              </div>
              <div class="col-md-12">
                <p><strong>Gender:</strong> Male</p>
              </div>
              <div class="col-md-12">
                <p><strong>Blood Group:</strong> A+</p>
              </div>
              <div class="col-md-12">
                <p><strong>Height:</strong> 193.23 cm</p>
              </div>
              <div class="col-md-12">
                <p><strong>Height:</strong> 63 kg</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-12">
                <h2>Address Details:</h2>
              </div>
              <div class="col-md-6">
                <p><strong>Street:</strong> Lorem ipsum dolor sit.</p>
                <p><strong>City:</strong> LA</p>
                <p><strong>State:</strong> LA</p>
                <p><strong>Country:</strong> Usa</p>
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
              <p><strong>Card Type:</strong> Usa</p>
            </div>
            <div class="col-md-12">
              <p><strong>Card Number:</strong> Usa</p>
            </div>
            <div class="col-md-12">
              <p><strong>Card Expiry:</strong> Usa</p>
            </div>
            <div class="col-md-12">
              <p><strong>IBAN:</strong> Usa</p>
            </div>
            <div class="col-md-12">
              <p><strong>Currency:</strong> Usa</p>
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
              <p><strong>Company Name :</strong> Usa</p>
            </div>
            <div class="col-md-12">
              <p><strong>Department:</strong> Usa</p>
            </div>
            <div class="col-md-12">
              <p><strong>Title:</strong> Usa</p>
            </div>
            <div class="col-md-12">
              <p><strong>Company Address:</strong> Usa</p>
            </div>
            <div class="col-md-12">
              <p><strong>Role:</strong> Usa</p>
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
              <p><strong>University :</strong> Usa</p>
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
