const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");
const sendBtn = document.getElementById("sendButton");
const statusLbl = document.getElementById("status");

document.body.addEventListener("keydown", () => {
  messageInput.focus();
});

messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

sendBtn.addEventListener("click", () => {
  const inputPrompt = messageInput.value.trim();
  messageInput.value = "";

  chatMessages.innerHTML += `
    <div class="flex items-start space-x-2 justify-end">
      <div
        class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl rounded-tr-none p-3 shadow-sm max-w-xs"
      >
        <p class="text-white">${inputPrompt}</p>
        <span class="text-xs text-purple-200 mt-1 block text-right"
          >${getTime()}</span
        >
      </div>
      <div
        class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
      >
        U
      </div>
    </div>`;

  statusLbl.textContent = "Typing...";

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-goog-api-key", "AIzaSyCmkjkg3-BI599p2SIqqq-SfK8cAJFVZXw");

  const raw = JSON.stringify({
    contents: [
      {
        parts: [
          {
            text: inputPrompt,
          },
        ],
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      statusLbl.textContent = "Online";

      chatMessages.innerHTML += `
        <div class="flex items-start space-x-2">
          <div
            class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          >
            AI
          </div>
          <div
            class="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-xs"
          >
            <p class="text-gray-800">
              ${marked.parse(result.candidates[0].content.parts[0].text)}
            </p>
            <span class="text-xs text-gray-400 mt-1 block">${getTime()}</span>
          </div>
        </div>
    `;
    })
    .catch((error) => console.error(error));
});

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes} ${period}`;
}
