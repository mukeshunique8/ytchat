const joinbtn =document.getElementById('joinbtn')
const sendbtn =document.getElementById('send-button')
const disconnectbtn =document.getElementById('disconnect')

const messagesEl =document.getElementById('messages')
const chatidEL =document.getElementById('chat-id')
const erroMsjEl =document.getElementById('erroMsj')
const msjfieldEl =document.getElementById('msjfield')
const msjlistdiv =document.getElementById('msjlist')


const joindivEl =document.getElementById('joindiv')
const textingEl =document.getElementById('texting')

chatidEL.addEventListener('keypress',(e)=>{

    if(e.keyCode ===13){
        joinmeet()
    }
})


function joinmeet(){



    if( chatidEL.value  !== ''){

        joindivEl.style.display = 'none';
        textingEl.style.display = ''
        
        console.log("div click");
    }else{
      
        erroMsjEl.innerText = "Please Enter with your ID"

    }
}


joinbtn.addEventListener('click', joinmeet);

disconnectbtn.addEventListener('click', () => {


    const response = prompt("Do you want to end this session? (yes/no)");

if (response !== null) {
    if (response.toLowerCase() === "yes") {
        // Code to end the session goes here
        console.log("Session ended.");
        joindivEl.style.display = '';
    
        textingEl.style.display = 'none'

    } else if (response.toLowerCase() === "no") {
        console.log("Session continues.");
    } else {
        console.log("Invalid response. Please enter 'yes' or 'no'.");
    }
} else {
    console.log("User canceled the prompt.");
}
       

});

// messageInput.addEventListener('keypress', function(event) {
//     // Check if the pressed key is the "Enter" key (keyCode 13)
//     if (event.keyCode === 13) {
//         sendMessage(); // Call the sendMessage function
//     });


function sendMessage(){

    const usermsj = messagesEl.value.trim();

    if(usermsj !== ''){

        const paragraph = document.createElement('p');

        paragraph.classList.add('rounded', 'px-3','py-2', 'text-white','bg-black');

        paragraph.textContent = usermsj;

        msjlistdiv.appendChild(paragraph);
        messagesEl.value = ''

        msjlistdiv.scrollTop = msjlistdiv.scrollHeight;
    }


}


messagesEl.addEventListener('keypress',(e)=>{
    if(e.keyCode === 13 || e.code === 'Backspace'  ){
        sendMessage()
    }
})



sendbtn.addEventListener('click', sendMessage);




document.addEventListener('DOMContentLoaded',()=>{
    textingEl.style.display = 'none'


})

