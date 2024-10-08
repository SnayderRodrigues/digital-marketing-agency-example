class App {
  constructor() {
    this._initialize();
    this._render();
  }

  _initialize() {
    this._createLenis();

    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  _createLenis() {
    this.lenis = new Lenis({
      duration: 0.8,
      wheelMultiplier: 0.8,
      // lerp: 0.1,
    });
  }

  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();

function show(anything) {
  document.querySelector(".header__menu").value = anything;
}

let menu = document.querySelector(".header__menu");
let items = document.querySelector(".header__list-div");

menu.onclick = function () {
  menu.classList.toggle("open-menu");
  items.classList.toggle("open-menu");

  items.removeAttribute("style");
};

items.onclick = function () {
  items.classList.remove("open-menu");
  menu.classList.remove("open-menu");
};

const menuButton = document.querySelector(".header__menu");
const menuBody = document.querySelector(".header__list-div");
const body = document.body;

menuButton.addEventListener("click", function () {
  if (menu.classList.contains("open-menu")) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "";
  }
});

menuBody.addEventListener("click", function () {
  if (menu.classList.contains("open-menu")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    items.style.transition = "none";
  }
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    header.classList.add("opaque");
  } else {
    header.classList.remove("opaque");
  }
});

const faqs = document.querySelectorAll(".faq__question");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
      }
    });

    faq.classList.toggle("active");
  });
});
