/* project JavaScript file */

//IIFE  - Immediately Invoked Function Expression


(function(){  
    "use strict";
        
    //code goes in here
    console.log("App Started...");
    
   
    //create a reference to a p element with an id of the projects
    
       function writeImageDescription(){
        console.log ("Executing writeImageDescription");
        
        var researchDescription = document.getElementById("researchDescription");
        researchDescription.textContent = "\nDevelopment and characterization of a new inbred transgenic rat strain expressing DsRed monomeric fluorescent protein.\n" +
        "Authors: Montanari, S.; Wang, X-H.; Yannarelli, G.; Dayan, V.; Berger, T.; Zocche, L.; Kobayashi, E.;  Viswanathan, S.; Keating, A."
        
         var researchDescription2 = document.getElementById("researchDescription2");
        researchDescription2.textContent = "\nPap Test as the First Step in Screening Genetic Stability in Cell-Based Therapy.\n" +
        "Authors: Carvalho, K.A.T.; Zocche, Larissa, Irioda, A.C., Souza, C., Ferreira, R.J.; Aliprandini, E.; Cunha, R.C.; Francisco, J.C.; Guarita-Souza, L.C.; Malvezzi, M.; Beltrame, M.; Mesquita, L.; Kuczera, D.; Vargas, R."

        var researchDescription3 = document.getElementById("researchDescription3");
        researchDescription3.textContent = "\Functional Outcome of Bone Marrow Stem Cells (CD45+/CD34−) After Cell Therapy in Acute Spinal Cord Injury: In Exercise Training and in Sedentary Rats. \n" +
        
        "Authors: Carvalho, K. A. T.; Cunha, R. C.; Vialle E.N; Osiecki, R.; Moreira, GHG; Simeoni, R. B.; Francisco, J. C.; Guarita-Souza, L. C.; Oliveira, L.; Zocche, Larissa; Olandoski, M."  
    }
    writeImageDescription();
    
    
        
}());