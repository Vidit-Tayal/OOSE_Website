let saveFile = () => {
    	
    // Get the data from each element on the form.
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email_id = document.getElementById('email');
    
    
    // This variable stores all the data.
    let data = email_id.value;
    
    // // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName =  email_id.value + ".txt";	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
    alert("Enrolled Succeffuly!! \nEnjoy the free access to 'The Ultimate JavaScript course for Beginners' course by CodeWithHarry 🤩🤩");
    var d = "Congratulations " +fname.value+" on signing up for our webpage! \nWe are thrilled to have you as a member and look forward to providing you with access to our exclusive course contents. Your eagerness to learn and grow is truly inspiring and we can't wait to see the progress you make through our platform.\nThank you for choosing Coding School and we wish you all the best in your educational journey!\n" ;
    console.log(d);
    var e = "Login id: "+email_id.value+"\n";
    console.log(e);
    console.log(f);
    console.log(email_id.value);


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thecodingschool49@gmail.com",
        Password : "56ABF8153E79E991F4870EAD7E4F71FEB553",
        To : email_id.value,
        From : "thecodingschool49@gmail.com",
        Subject : "Welcome to Coding School!!" ,
        Body : d+e+f
    }).then(
      message => alert("Check your inbox to access the login id and password")
      
    );



}