/* File Name: index.js */
/* Author's name: Larissa Zocche */
/* WebSite name: Mini Portfolio */
/* File Description: JavaScript for the index page. */

//IIFE  - Immediately Invoked Function Expression

(function () {
    "use strict";
    //index page
    var highlights1 = document.getElementById("highlights1");
    var highlights2 = document.getElementById("highlights2");
    var highlights3 = document.getElementById("highlights3");
    var education1 = document.getElementById("education1");
    var education1A = document.getElementById("education1A");
    var education2 = document.getElementById("education2");
    var education2A = document.getElementById("education2A");
    var education3 = document.getElementById("education3");
    var education3A = document.getElementById("education3A");

    //projects
    var researchDescription = document.getElementById("researchDescription");
    var researchDescription2 = document.getElementById("researchDescription2");
    var researchDescription3 = document.getElementById("researchDescription3");


    //define your paragraphs array
    var paragraphs = [];
    //data for the main page
    paragraphs[0] = "Methodical and strong organizational skills";
    paragraphs[1] = "Excellent attention to details";
    paragraphs[2] = "Highly motivated, patient, always willing to acquire new knowledge and willing to learn with  people with different opinions and backgrounds.";
    paragraphs[3] = "B. S.c in Biological Sciences";
    paragraphs[4] = "Pontifical Catholic University of Paraná, Brazil.";
    paragraphs[5] = "Master’s in Biotechnology";
    paragraphs[6] = "Pequeno Príncipe University, Brazil";
    paragraphs[7] = "Software Engineering Technician";
    paragraphs[8] = "Centennial College, Toronto, Canada";

    
    
    //data for the projects page
    paragraphs[9] = "Development and characterization of a new inbred transgenic rat strain expressing DsRed monomeric fluorescent protein. Authors: Montanari, S.; Wang, X-H.; Yannarelli, G.; Dayan, V.; Berger, T.; Zocche, L.; Kobayashi, E.;  Viswanathan, S.; Keating, A.";
    paragraphs[10] = "Pap Test as the First Step in Screening Genetic Stability in Cell-Based Therapy. Authors: Carvalho, K.A.T.; Zocche, Larissa, Irioda, A.C., Souza, C., Ferreira, R.J.; Aliprandini, E.; Cunha, R.C.; Francisco, J.C.; Guarita-Souza, L.C.; Malvezzi, M.; Beltrame, M.; Mesquita, L.; Kuczera, D.; Vargas, R.";
    paragraphs[11] = "Functional Outcome of Bone Marrow Stem Cells (CD45+/CD34−) After Cell Therapy in Acute Spinal Cord Injury: In Exercise Training and in Sedentary Rats.;Authors: Carvalho, K. A. T.; Cunha, R. C.; Vialle E.N; Osiecki, R.; Moreira, GHG; Simeoni, R. B.; Francisco, J. C.; Guarita-Souza, L. C.; Oliveira, L.; Zocche, Larissa; Olandoski, M.";

    //check if the paragraphs exists
    //Index page
    if (highlights1) {
        highlights1.textContent = paragraphs[0];
    }
    if (highlights2) {
        highlights2.textContent = paragraphs[1];
    }
    if (highlights3) {
        highlights3.textContent = paragraphs[2]
    }
    if (education1) {
        education1.textContent = paragraphs[3]
    }
    if (education1A) {
        education1A.textContent = paragraphs[4]
    }
    if (education2) {
        education2.textContent = paragraphs[5]
    }
    if (education2A) {
        education2A.textContent = paragraphs[6]
    }
     if (education3) {
        education3.textContent = paragraphs[7]
    }
    if (education3A) {
        education3A.textContent = paragraphs[8]
    }
    //PROJECTS PAGE
    if (researchDescription) {
        researchDescription.textContent = paragraphs[9]
    }
    if (researchDescription2) {
        researchDescription2.textContent = paragraphs[10]
    }
    if (researchDescription3) {
        researchDescription3.textContent = paragraphs[11]
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
