const subWidget = document.getElementById("subWidget");
const closeSub = document.getElementById("closeSub");

const openSubTriggers = document.querySelectorAll(".open-subscribe");

openSubTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    subWidget.classList.add("show");
  });
});

// Закриття
if (closeSub) {
  closeSub.addEventListener("click", () => {
    subWidget.classList.remove("show");
  });
}
