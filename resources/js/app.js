require('./bootstrap');

const nickname = document.getElementById('nickname');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
const chatDiv = document.getElementById('chat');

submitButton.addEventListener('click', () =>{
    axios.post('/chat',{
        nickname: nickname.value,
        message: message.value
        }
        );

});


window.Echo.channel('chat')
.listen('.chat-message',(event) =>{
chatDiv.innerHTML += `
  <div class="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
           ${event.message} par <em>${event.nickname}</em>
        </div>`
});

