var btn = document.getElementById("submit-feedback-button");



btn.addEventListener('click', function (e) {
    let f = document.getElementById("feedback-rect").value;
    e.preventDefault();
    document.getElementById("feedback-rect").value = "";
    alert(f);
    

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thecodingschool49@gmail.com",
        Password : "56ABF8153E79E991F4870EAD7E4F71FEB553",
        To : 'vidittayal21@gmail.com',
        From : "thecodingschool49@gmail.com",
        Subject : "New Feedback for Apna College course",
        Body : f
    }).then(
      message => alert("Feedback successfully submitted.")
    );

      
})