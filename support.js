// Знаходимо всі елементи чату
const openChatBtn = document.getElementById("openChat");
const closeChatBtn = document.getElementById("closeChat");
const chatWindow = document.getElementById("chatWindow");
const chatInput = document.getElementById("chatInput");
const sendMessageBtn = document.getElementById("sendMessage");
const chatBody = document.getElementById("chatBody");

// 1. Відкриття чату
if (openChatBtn && chatWindow) {
  openChatBtn.addEventListener("click", () => {
    chatWindow.classList.add("active"); // Або стилізуй через display: flex
    chatWindow.style.display = "flex";
  });
}

// 2. Закриття чату
if (closeChatBtn && chatWindow) {
  closeChatBtn.addEventListener("click", () => {
    chatWindow.style.display = "none";
  });
}

// 3. Логіка відправки повідомлення (бонус)
if (sendMessageBtn && chatInput && chatBody) {
  sendMessageBtn.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message !== "") {
      // Створюємо елемент повідомлення
      const messageElement = document.createElement("p");
      messageElement.textContent = `Ви: ${message}`;
      messageElement.style.background = "#f1f1f1";
      messageElement.style.padding = "10px";
      messageElement.style.margin = "5px 0";

      chatBody.appendChild(messageElement);
      chatInput.value = ""; // Очищуємо поле

      // Прокрутка вниз
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });
}
