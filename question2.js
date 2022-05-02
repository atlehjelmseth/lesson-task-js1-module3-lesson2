const messageContainer = document.querySelector(".message-container")

function createMessage(type = "success", message = "No message") {
  const html = `<div class="${type}">${message}</div>`
  return html;
}

const message = createMessage();

messageContainer.innerHTML = message;