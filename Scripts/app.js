/* File Name: index.js */
/* Author's name: Larissa Zocche */
/* WebSite name: Mini Portfolio */
/* File Description: JavaScript for the index page. */

//IIFE  - Immediately Invoked Function Expression

(function () {
    "use strict";
    //index page
    var introduction = document.getElementById("introduction");
    var experience = document.getElementById("experience");
    var skills = document.getElementById("skills");
    var objectives = document.getElementById("objectives");

    //projects
    var researchDescription = document.getElementById("researchDescription");
    var researchDescription2 = document.getElementById("researchDescription2");
    var researchDescription3 = document.getElementById("researchDescription3");


    //define your paragraphs array
    var paragraphs = [];
    //data for the main page
    paragraphs[0] = "I am an enthusiastic graduate of Biology. I have significant work expertise through internships, a Masters in Biotechnology and a volunteer position in a research lab.";
    paragraphs[1] = "My past experiences as a Biology Teacher (delivering lectures, preparing differentiated lessons), Sales Representative (preparing sales presentations that explained product specifications and applications) and in a restaurant I developed my verbal and written skills, taught me about managing multiple priorities and how to multi task in a fast paced environment. In my most recent position as Quality Control Technician I have learned how to maintain accuracy in a high volume and repetitive work environment that required strong attention to details and where I have explored my ability for versatility and flexibility.";
    paragraphs[2] = "I am highly motivated, patient, always willing to acquire new knowledge and willing to learn with  people with different opinions and backgrounds.";
    paragraphs[3] = "My next goal is to graduate as a Software Engineer Technician and find a good job in the IT industry.";
    //data for the projects page
    paragraphs[4] = "Development and characterization of a new inbred transgenic rat strain expressing DsRed monomeric fluorescent protein. Authors: Montanari, S.; Wang, X-H.; Yannarelli, G.; Dayan, V.; Berger, T.; Zocche, L.; Kobayashi, E.;  Viswanathan, S.; Keating, A.";
    paragraphs[5] = "Pap Test as the First Step in Screening Genetic Stability in Cell-Based Therapy. Authors: Carvalho, K.A.T.; Zocche, Larissa, Irioda, A.C., Souza, C., Ferreira, R.J.; Aliprandini, E.; Cunha, R.C.; Francisco, J.C.; Guarita-Souza, L.C.; Malvezzi, M.; Beltrame, M.; Mesquita, L.; Kuczera, D.; Vargas, R.";
    paragraphs[6] = "Functional Outcome of Bone Marrow Stem Cells (CD45+/CD34−) After Cell Therapy in Acute Spinal Cord Injury: In Exercise Training and in Sedentary Rats.;Authors: Carvalho, K. A. T.; Cunha, R. C.; Vialle E.N; Osiecki, R.; Moreira, GHG; Simeoni, R. B.; Francisco, J. C.; Guarita-Souza, L. C.; Oliveira, L.; Zocche, Larissa; Olandoski, M.";

    //check if the paragraphs exists
    if (introduction) {
        introduction.textContent = paragraphs[0];
    }
    if (experience) {
        experience.textContent = paragraphs[1];
    }
    if (skills) {
        skills.textContent = paragraphs[2]
    }
    if (objectives) {
        objectives.textContent = paragraphs[3]
    }
    if (researchDescription) {
        researchDescription.textContent = paragraphs[4]
    }
    if (researchDescription2) {
        researchDescription2.textContent = paragraphs[5]
    }
    if (researchDescription3) {
        researchDescription3.textContent = paragraphs[6]
    }

//if a form field is empty, this function shows a message and prevent the form from being submitted.
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



})();
