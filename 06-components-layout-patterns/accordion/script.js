const iconButtons = document.querySelectorAll(".icon");
const accordionItems = document.querySelectorAll(".item");

// toggle open and close items
const toggleItemOpenClose = function (e) {
  const item = e.target.closest(".item");
  item.classList.toggle("open");
};

// open modals
iconButtons.forEach((btn) =>
  btn.addEventListener("click", toggleItemOpenClose)
);
