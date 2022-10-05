/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show--menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show--menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  navMenu.classList.remove("show--menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  // Optional parameters
  loop: true,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});
/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactProject = document.getElementById("contact-project");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // add and remove color
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    // show Message
    contactMessage.textContent = "Write all the input fields";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_g9v6bv9",
        "template_98mne99",
        "#contact-form",
        "wkmsFO1qctVo45bly"
      )
      .then(
        () => {
          // show message and color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent ✅";
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );
    // to clear the input field
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("actve-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// previously selected topic (if user selecter)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark-theme" : "light";
const getCurrentIcon = document.body.classList.contains(iconTheme)
  ? "ri-moon-line"
  : "ri-sun-line";

// we validate if the user previously choose the topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // add or remove the dark/ icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true /* Animation repeat */,
});

sr.reveal(
  `.home__data, .projects__container, .testimonial__container, .footer__container`
);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {
  origin: "left",
});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {
  origin: "right",
});
sr.reveal(`.qualification__content, .services__card`, { interval: "100" });
