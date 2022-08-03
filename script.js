const items = document.querySelectorAll(".item");
const accordion = document.querySelector(".accordion");
const itemContent = document.querySelectorAll(".hidden-box");

accordion.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".item");
  if (!clicked) return; //guard class
  items.forEach((el) => {
    if (el !== clicked) {
      el.classList.remove("open");
    }
  });
  itemContent.forEach((el) => el.classList.remove("open"));
  clicked.classList.toggle("open");

  document
    .querySelector(`.hidden-box--${clicked.dataset.tab}`)
    .classList.toggle("open");
});
