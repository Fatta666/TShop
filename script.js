// 1. Знаходимо елементи для модального вікна
const forgotLink = document.querySelector(".loss-password");
const modal = document.getElementById("passwordModal");
const closeBtn = document.getElementById("closeModal");

// Перевірка: чи є посилання "Забув пароль" на цій сторінці?
if (forgotLink && modal) {
  forgotLink.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("active");
    console.log("Вікно відкрито!");
  });
}

// Перевірка: чи є кнопка закриття?
if (closeBtn && modal) {
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
  });
}

// 2. Логіка для кнопки "Назад" (якщо вона є на сторінці)
const backBtn = document.getElementById("goBack");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.history.back();
  });
}

// 3. Логіка для чату (щоб не було помилок в консолі)
const openChatBtn = document.getElementById("openChat");
if (openChatBtn) {
  openChatBtn.addEventListener("click", () => {
    // твій код чату тут
  });
}
