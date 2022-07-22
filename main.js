// Themes
const dark_theme = document.querySelector(".dark-btn");
const light_theme = document.querySelector(".light-btn");
const toggle = document.querySelector(".toggle-icon");
const mode = document.querySelector(".toggle-txt");

toggle.addEventListener("click", () => {
  if (dark_theme.style.opacity == 1) {
    dark_theme.style.opacity = "0";
    light_theme.style.opacity = "1";
    light_theme.style.transition = "0.3s";
    mode.innerText = "Light Mode";
    document.body.classList.add("light-theme");
  } else {
    dark_theme.style.opacity = "1";
    dark_theme.style.transition = "0.3s";
    light_theme.style.opacity = "0";
    mode.innerText = "Dark Mode";
    document.body.classList.remove("light-theme");
  }
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
