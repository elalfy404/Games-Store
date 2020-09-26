let activeClass = "menu_active";
let active = "menu_show";

const forEach = (array, callback, scope) => {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

forEach(
  document.querySelectorAll(".menu_item li.nav-dropdown"),
  (index, value) => {
    value.addEventListener("click", () => {
      if (!value.classList.contains(activeClass)) {
        let el = document.querySelectorAll(".menu_item li.nav-dropdown");
        for (let i = 0; i < el.length; i++) {
          el[i].classList.remove(activeClass);
        }
        value.classList.toggle(activeClass);
      } else if (value.classList.contains(activeClass)) {
        value.classList.remove(activeClass);
      }
      // --------------- ul ----------------------
      let show = document.querySelectorAll(".nav-dropdown ul.dropdown");
      if (!show[index].classList.contains(active)) {
        let el = document.querySelectorAll(".nav-dropdown ul.dropdown");
        for (let i = 0; i < el.length; i++) {
          el[i].classList.remove(active);
          el[i].style.display = "none";
          el[i].setAttribute("aria-hidden", "true");
        }
        show[index].classList.toggle(active);
        show[index].style.display = "block";
        show[index].setAttribute("aria-hidden", "false");
      } else if (show[index].classList.contains(active)) {
        show[index].classList.remove(active);
        show[index].style.display = "none";
        show[index].setAttribute("aria-hidden", "true");
      }
    });
  }
);

// Menu Open
const clos = document.getElementById("closBtn");
const none = document.getElementsByClassName("menu_wrapper")[0];

const close = () => {
  none.style.display = "none";
  none.classList.remove("show_menu");
  document.body.classList.remove("open-nav");
};
clos.addEventListener("click", close);

const open = document.getElementById("menu_open");
const show = () => {
  none.style.display = "block";
  none.classList.add("show_menu");
  document.body.classList.add("open-nav");
};
open.addEventListener("click", show);

// Date in Nav

const objToday = new Date(),
  dayOfWeek = String(objToday.getDate()).padStart(2, "0"),
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();
let today = dayOfWeek + " " + curMonth + ", " + curYear;

document.getElementById("clock").textContent = today;

// .............................................................

const listItems = document.querySelectorAll(
  ".update_news_section .tabs-1 span"
);
const all = document.querySelectorAll(".tab_content .tab");

const toggleActiveClass = (active) => {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
  active.classList.add("active");
};

const toggleAll = (dataClass) => {
  if (dataClass === "all") {
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < all.length; i++)
      all[i].dataset.class === dataClass
        ? (all[i].style.display = "block")
        : (all[i].style.display = "none");
  }
};
//
const hardware = document.getElementById("hardware");
const hard = document.getElementById("hard");

const add = (dataClass) => {
  if (dataClass === "all") {
    hardware.style.display = "none";
  }
  if (dataClass === "all") {
    hard.style.display = "none";
  }
};
//
const hardware2 = document.getElementById("hardware2");
const platform = document.getElementById("platform");

const addStyle = (dataClass) => {
  if (dataClass === "hardware") {
    hardware2.classList.add("ete");
  } else {
    hardware2.classList.remove("ete");
  }
  if (dataClass === "platform") {
    platform.classList.add("ete");
  } else {
    platform.classList.remove("ete");
  }
};
//
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", () => {
    toggleActiveClass(listItems[i]);
    toggleAll(listItems[i].dataset.class);
    add(listItems[i].dataset.class);
    addStyle(listItems[i].dataset.class);
  });
}

// add class and style in Nav-Search // search.pug

const searchOpen = document.getElementById("search_open");
const searchModel = document.getElementById("mySearch-model");
const searchClose = document.getElementById("search-close");

const searchShow = () => {
  searchModel.style.display = "block";
  searchModel.classList.add("show");
  searchOpen.classList.add("activity");
  document.body.classList.add("open-search");
};
searchOpen.addEventListener("click", searchShow);

const closeSearch = () => {
  searchModel.style.display = "none";
  searchModel.classList.remove("show");
  searchOpen.classList.remove("activity");
  document.body.classList.remove("open-search");
};
searchClose.addEventListener("click", closeSearch);

// add class and style in Nav login and signup // form.pug
//  open
const loginOpen = document.getElementById("login-open");
const signUpOpen = document.getElementById("signUp-open");

const sigUpSection = document.getElementById("sigUpSection");
const loginSection = document.getElementById("loginSection");

const closeSection = document.getElementById("closeSection");
const showSection = document.getElementById("showSection");

const goInLogin = document.getElementById("goInLogin");

const goInLoginSection = () => {
  sigUpSection.style.display = "none";
  loginSection.style.display = "block";
  goInLogin.style.display = "none";
  loginOpen.classList.add("active");
};
goInLogin.addEventListener("click", goInLoginSection);

const openLoginSection = () => {
  // add style on open loginOpen
  loginSection.style.display = "block";
  showSection.style.display = "block";
  sigUpSection.style.display = "none";
  // add class in loginOpen
  loginOpen.classList.add("active");
  // add class in body on open loginOpen
  document.body.classList.add("show");
};
loginOpen.addEventListener("click", openLoginSection);

const openSignUpSection = () => {
  // add style on open loginOpen
  loginSection.style.display = "none";
  showSection.style.display = "block";
  sigUpSection.style.display = "block";
  goInLogin.style.display = "block";

  // add class in loginOpen
  signUpOpen.classList.add("active");
  // add class in body on open loginOpen
  document.body.classList.add("show");
};
signUpOpen.addEventListener("click", openSignUpSection);

const closeOllSection = () => {
  // add style
  loginSection.style.display = "none";
  showSection.style.display = "none";
  sigUpSection.style.display = "none";
  // remove class in loginOpen
  loginOpen.classList.remove("active");
  signUpOpen.classList.remove("active");
  // remove class in body on open loginOpen
  document.body.classList.remove("show");
};
closeSection.addEventListener("click", closeOllSection);
