/* index JavaScript file */

//IIFE  - Immediately Invoked Function Expression

(function(){  
    "use strict";
    
    
    
    //code goes in here
    console.log("App Started...");
    
   
    //create a reference to a p element with an id of "first paragraph"
        
    
function writeToIntroduction(){
        console.log ("Executing writeToIntroduction");
        
        var introduction = document.getElementById("introduction");
        introduction.textContent = "\nI am an enthusiastic graduate of Biology. I have significant work expertise through internships, a Masters in Biotechnology and a volunteer position in a research lab." +
        "My past experiences as a Biology Teacher (delivering lectures, preparing differentiated lessons), Sales Representative (preparing sales presentations that explained product specifications and applications) and in a restaurant I developed my verbal and written skills, taught me about managing multiple priorities and how to multi task in a fast paced environment." + "n\In my most recent position as Quality Control Technician I have learned how to maintain accuracy in a high volume and repetitive work environment that required strong attention to details and where I have explored my ability for versatility and flexibility. I am highly motivated, patient and enthusiastic, always willing to acquire new knowledge and willing to learn with  people with different opinions and backgrounds.\n" +  "n\My next goal is to graduate as a Software Engineer Technician and find a good job in the IT industry. \n" ;
    }
    writeToIntroduction();
    
}());


