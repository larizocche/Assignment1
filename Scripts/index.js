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
        introduction.textContent = "I am an enthusiastic graduate of Biology. I have significant work expertise through internships, a Masters in Biotechnology and a volunteer position in a research lab."
        
        var experience = document.getElementById("experience");
        experience.textContent =  "My past experiences as a Biology Teacher (delivering lectures, preparing differentiated lessons), Sales Representative (preparing sales presentations that explained product specifications and applications) and in a restaurant I developed my verbal and written skills, taught me about managing multiple priorities and how to multi task in a fast paced environment." + " In my most recent position as Quality Control Technician I have learned how to maintain accuracy in a high volume and repetitive work environment that required strong attention to details and where I have explored my ability for versatility and flexibility."
        
        var skills = document.getElementById("skills");
        skills.textContent = "I am highly motivated, patient, always willing to acquire new knowledge and willing to learn with  people with different opinions and backgrounds."
        
        var objectives = document.getElementById("objectives");
        objectives.textContent = "My next goal is to graduate as a Software Engineer Technician and find a good job in the IT industry."
    }
    writeToIntroduction();
    
    function footer () {
        var footer = document.getElementById("footer");
        footer.textContent = "Larissa Zocche - Portfolio - COMP125 - Summer 2016 - Centennial College"
    }
    footer();
}());


