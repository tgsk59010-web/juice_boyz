
const products = [
  {
    name: "Beetroot Juice",
    price: "RM 8.00",
    desc: "Boosts blood circulation",
    img: "https://raw.githubusercontent.com/tgsk59010-web/juice-boyz123456/main/beetroot%20card.jpeg"
  },
  {
    name: "Carrot Juice",
    price: "RM 5.00",
    desc: "Improves eyesight & skin health",
    img: "https://raw.githubusercontent.com/tgsk59010-web/juice-boyz123456/main/carrot%20card.jpeg"
  },
  {
    name: "Dragon Fruit Juice",
    price: "RM 7.00",
    desc: "High antioxidants for immunity",
    img: "https://raw.githubusercontent.com/tgsk59010-web/juice-boyz123456/main/dragonfruit%20card.jpeg"
  },
  {
    name: "Green Apple & Grapes",
    price: "RM 10.00",
    desc: "Energy + detox blend",
    img: "https://raw.githubusercontent.com/tgsk59010-web/juice-boyz123456/main/green%20apple_grapes%20card.jpeg"
  },
  {
    name: "Orange Juice",
    price: "RM 5.00",
    desc: "Vitamin C booster",
    img: "https://raw.githubusercontent.com/tgsk59010-web/juice-boyz123456/main/orange%20card.jpeg"
  },
  {
    name: "Watermelon Juice",
    price: "RM 7.00",
    desc: "Hydration & refreshment",
    img: "https://raw.githubusercontent.com/tgsk59010-web/juice-boyz123456/main/watermelon%20card.jpeg"
  }
];


let output = "";

products.forEach((item) => {
  output += `
    <div class="col-md-4 mb-4">
      <div class="card custom-card h-100 shadow-sm">

        <img src="${item.img}" class="card-img-top" alt="${item.name}">

        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.desc}</p>
          <p class="price-tag">${item.price}</p>

          <button class="btn btn-success w-100"
            data-bs-toggle="tooltip"
            title="Click to order ${item.name}">
            Buy Now
          </button>

          <button class="btn btn-warning w-100 mt-2"
            data-bs-toggle="popover"
            title="Benefits"
            data-bs-content="${item.desc}">
            Info
          </button>

        </div>
      </div>
    </div>
  `;
});

document.getElementById("product-list").innerHTML = output;


document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el);
});


document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
  new bootstrap.Popover(el);
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let agree = document.getElementById("agree").checked;

  
  [name, phone, email, message].forEach(input => {
    input.classList.remove("is-invalid");
  });


  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let phonePattern = /^[0-9]{9,12}$/;

  let valid = true;

  
  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
    valid = false;
  }

  if (!phonePattern.test(phone.value.trim())) {
    phone.classList.add("is-invalid");
    valid = false;
  }

  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("is-invalid");
    valid = false;
  }

  if (message.value.trim() === "") {
    message.classList.add("is-invalid");
    valid = false;
  }

  if (!agree) {
    alert("You must agree to the terms.");
    valid = false;
  }

  if (!valid) return;


  alert("Form submitted successfully!");

  
  document.getElementById("contactForm").reset();
});


$(document).ready(function () {
  $(".nav-link").click(function (e) {
    e.preventDefault();

    let target = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 700);
  });
});
