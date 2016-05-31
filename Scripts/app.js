/* File Name: index.js */
/* Author's name: Larissa Zocche */
/* WebSite name: Mini Portfolio */
/* File Description: JavaScript for the index page. */

//IIFE  - Immediately Invoked Function Expression

(function () {
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    //index page
    paragraphElements[0] = document.getElementById("highlights1");
    paragraphElements [1]= document.getElementById("highlights2");
    paragraphElements [2]= document.getElementById("highlights3");
    paragraphElements [3]= document.getElementById("education");
    paragraphElements [4]= document.getElementById("experience");
    //projects
    paragraphElements [5]= document.getElementById("researchDescription");
    paragraphElements [6]= document.getElementById("researchDescription2");
    paragraphElements [7]= document.getElementById("researchDescription3");


    //define your paragraphs array
    var paragraphs = [];
    //data for the main page
   paragraphs[0] = "Methodical and strong organizational skills";
    paragraphs[1] = "Excellent attention to details";
    paragraphs[2] = "Highly motivated, patient, always willing to acquire new knowledge and willing to learn with  people with different opinions and backgrounds.";
    paragraphs[3] = "<span class='title'>B. S.c in Biological Sciences</span><br> Pontifical Catholic University of Paraná, Curitiba, Brazil <br><span class='title'> Master’s in Biotechnology </span><br> Pequeno Príncipe University, Curitiba, Brazil <br><span class='title'> Software Engineering Technician</span> <br> Centennial College, Toronto, Canada";
    paragraphs[4] = "<span class='title'>Quality Control Technician</span> <br> Baylis Medical Company, Mississauga, Canada <br><span class='title'> Research Assistant Volunteer</span> <br> Cell Therapy Translational Research Laboratory (Dr Armand Keating Lab), Princess Margaret Hospital, Toronto, Canada <br><span class='title'> Biology Teacher </span><br> Estadual Do Parana High School, Curitiba, Brazil";
    
    //data for the projects page
    paragraphs[5] =  "<span class='title'>Development and characterization of a new inbred transgenic rat strain expressing DsRed monomeric fluorescent protein.</span><br> Authors: Montanari, S.; Wang, X-H.; Yannarelli, G.; Dayan, V.; Berger, T.; Zocche, L.; Kobayashi, E.;  Viswanathan, S.; Keating, A.";
    paragraphs[6] = "<span class='title'>Pap Test as the First Step in Screening Genetic Stability in Cell-Based Therapy.</span><br> Authors: Carvalho, K.A.T.; Zocche, Larissa, Irioda, A.C., Souza, C., Ferreira, R.J.; Aliprandini, E.; Cunha, R.C.; Francisco, J.C.; Guarita-Souza, L.C.; Malvezzi, M.; Beltrame, M.; Mesquita, L.; Kuczera, D.; Vargas, R.";
    paragraphs[7] = "<span class='title'>Functional Outcome of Bone Marrow Stem Cells (CD45+/CD34−) After Cell Therapy in Acute Spinal Cord Injury: In Exercise Training and in Sedentary Rats. </span><br> Authors: Carvalho, K. A. T.; Cunha, R. C.; Vialle E.N; Osiecki, R.; Moreira, GHG; Simeoni, R. B.; Francisco, J. C.; Guarita-Souza, L. C.; Oliveira, L.; Zocche, Larissa; Olandoski, M.";

    

 var paragraphsElementsLength = paragraphElements.length-1;
    // check to see if paragraph one exists
    for (var index = paragraphsElementsLength; index >= 0; index--) {
      //inject html tags along with the text
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }



})();
