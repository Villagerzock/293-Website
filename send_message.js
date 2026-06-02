function sendMail(name, subject, message){
    window.open(`mailto:marvin.sieber@edu.gbssg.ch?subject=Message From: ${name} with Subject: ${subject}&body=${message}`)
}

const name = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
document.getElementById("send-message").addEventListener("click",()=>{
    sendMail(name.value, subject.value, message.value);
});