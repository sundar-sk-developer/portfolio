//typed string

var typed = new Typed(".typing",{
    strings:["","Web Designer...","Web Developer...","UI/UX Designer..."],
    typeSpeed:100,
    backSpeed:60,
    loop:true
 })

// var typed = new Typed(".typing",{
//     strings
// })


//form

const form = document.getElementById("formSection");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const NameVal = document.getElementById("name").value;
            const emailVal = document.getElementById("email").value;
            const subjectVal = document.getElementById("subject").value;
            const messageVal = document.getElementById("message").value;


            
            if (!NameVal ||  !emailVal || !subjectVal ||!messageVal) {
                alert("Name,Email,subject,and message are important.");
                return;
            }

          
            console.log("Firstname: " + NameVal);document.write("<br/>")
           
            console.log("Email: " + emailVal);document.write("<br/>")
            console.log("subject: " + subjectVal);document.write("<br/>")
          
            console.log("Message: " + messageVal);document.write("<br/>")
            
        });
