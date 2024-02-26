const form = document.querySelector('form');

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yachtingeveryday@gmail.com",
        Password : "21FD34E5275EE5658B66B502CF3884CB5C13",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}