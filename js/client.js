// const socket = io('http://localhost:8000');

// const form = document.getElementById('send-container');
// const messageInput = document.getElementById('messageInp')
// const messageContainer = document.querySelector(".container")

// const name = prompt("Enter your name to join ");
// socket.emit('new-user-joined', name);


const name = prompt("Enter your name to join ");

const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message'); // ✅ fixed typo: 'messsage' → 'message'
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

socket.emit('new-user-joined', name);

socket.on('receive', data => {
    const element = document.createElement('div');
    element.innerText = `${data.name}: ${data.message}`;
    messageContainer.append(element);
});

socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right');
});
