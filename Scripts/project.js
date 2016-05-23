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
        researchDescription.textContent = "\nResearch paper description here\n" ;
    }
    writeImageDescription();
        
}());