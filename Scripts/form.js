/* form JavaScript file */

//IIFE  - Immediately Invoked Function Expression

function validateForm() {
        var fName = document.forms["contactForm"]["txtFName"].value;
        var lName = document.forms["contactForm"]["txtLName"].value;
        var eMail = document.forms["contactForm"]["txtEmail"].value;
        var message = document.forms["contactForm"]["txtMessage"].value;
        
        if ((fName == null || fName == "") || (lName == null || lName == "")){
            alert("Name must be filled out");
            return false;
        }
}