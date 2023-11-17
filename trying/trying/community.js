// https://meet.google.com/fzp-fmpb-hwt
function sendMail() {

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "thecodingschool49@gmail.com",
        Password: "56ABF8153E79E991F4870EAD7E4F71FEB553",
        To: 'vidittayal21@gmail.com',
        From: "thecodingschool49@gmail.com",
        Subject: "URGENT!! JOIN THE VIDEO CONFERENCE NOW!",
        Body: "Use this link to join the meeting: https://meet.google.com/fzp-fmpb-hwt "
    }).then(
        message => alert("An email has been sent to your mentor Snehal Kumar.\nJoin the meeting to get your doubts cleared📝")
    );

    window.open("https://meet.google.com/fzp-fmpb-hwt");





}