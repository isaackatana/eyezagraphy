
// menu bar .............................

let bar = document.getElementById('bar');
let close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// video player .............................

let videoPlayer = document.getElementById('videoPlayer');
let myVideo = document.getElementById('myVideo');

function stopVideo(){
    videoPlayer.style.display = 'none';
}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = 'block';
}

// contact form .............................

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mrisaackatana@gmail.com",
        Password : "StillScorpio101",
        To : 'mrisaackatana@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiries",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email : " + document.getElementById("email").value
        + "<br> Phone no : " + document.getElementById("phone").value
        + "<br> Message : " + document.getElementById("message").value
    }).then(
        message => alert('Message sent successfully')
    );
}