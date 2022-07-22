// Themes
const dark_theme = document.querySelector(".dark-btn");
const light_theme = document.querySelector(".light-btn");

light_theme.addEventListener("click", () => {
  dark_theme.style.opacity = "0";
  light_theme.style.opacity = "1";
  document.body.classList.add("light-theme");
});

dark_theme.addEventListener("click", () => {
  dark_theme.style.opacity = "1";
  light_theme.style.opacity = "0";
  document.body.classList.remove("light-theme");
});

// counter
const counters = document.querySelectorAll(".counter");
const speed = 1000;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 5);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});
