var EducationFields=[];
var Languages=[];
var skills=[];
var skills_progress=[];
function checkInput(event){
   event.preventDefault();
    //check the name:
    var name=document.getElementById('Name').value;
    var about=document.getElementById('about2').value;
    var phone_nb=document.getElementById('phone_nbr').value;
    var whatsApp=document.getElementById('whatsapp').value;
    var loc_desc=document.getElementById('Location-description').value;
    var loc_url=document.getElementById('Location-URL').value;
    var Email=document.getElementById('email-input').value;
    //checking name
    if(name==''){
        alert("The Name field can't be left empty !!!");
        return false;
    }
    if (name.search(/^[A-Za-z\s]+$/)==-1){
      //this means that the name can have only letters(upper & lower) and spaces
        alert("name can contain only letters!!! ");
        return false;
    }
    if (name.length<3 || name.length>25){
        alert("The name must consist of at least 3 letters and maximum of 25 letters.")
        return false;
    }
    //check about:
    if(about==''){
        alert("The description field can't be empty!!!");
        return false;
    }
    if (phone_nb != '' && phone_nb.search(/^\+[0-9]{7,14}$/) == -1) {
      //the '+' sign is needed here for the country code (+961 for Lebanon for Example)
        alert("Phone number should be between 8 and 15 digits and can only contain numbers and a '+' sign at the beginning.");
        return false;
      }
      if (whatsApp != '' && phone_nb.search(/^\+[0-9]{7,14}$/) == -1) {
        alert("Whatsapp phone number should be between 8 and 15 digits and can only contain numbers and a '+' sign at the beginning.");
        return false;
      }
      if(loc_desc=='' && loc_url!=''){
        //since the program is designed that when the description is clicked the url is being accessed
        alert("You can't enter a URL for your location without entering the location description in the field above.");
        return false;
      }
      if(phone_nb=='' && whatsApp=='' && Email==''){
        alert('Fill at least one of the  fields(Phone number, email or whatsapp) in order to have a reference if someone wants to contact with you');
        return false;
      }
      return true;
}

function addSkills() {
    // Get the number of skills from the input
    var numSkills = document.getElementById("numSkills").value;
  
    // Validate the input
    if (numSkills < 1 || numSkills > 12) {
      alert("Please enter a number between 1 and 12");
      return false;
    }
  
    // Clear the skills container
    var skillsContainer = document.getElementById("skillsContainer");
    skillsContainer.innerHTML = "";
  
    // Create the input fields for each skill
    for (var i = 1; i <= numSkills; i++) {
      var skillName = document.createElement("input");
      skillName.type = "text";
      skillName.placeholder = "Skill " + i + " name" + "(in form of: Skill name (progress percentage))";
      skillName.name = "skillName" + i;
     // creating progress input field for each skill
      var skillProgress = document.createElement("input");
      skillProgress.type = "number";
      skillProgress.min = "0";
      skillProgress.max = "100";
      // skillProgress.placeholder = "Skill " + i + " progress percentage";
      skillProgress.placeholder = "progress";
      skillProgress.name = "skillProgress" + i;
  
      var skillDiv = document.createElement("div");
      skillDiv.appendChild(skillName);
      skillDiv.appendChild(skillProgress);
      skillsContainer.appendChild(skillDiv);
       addSkillEventHandler(skillName, i);
      addSkillProgressEventHandler(skillProgress, i);
    }
    return true;
  }
  // }
  function addSkillEventHandler(skillName, index) {
    // the event handler will capture the correct value of i for each input element.
    skillName.addEventListener("blur", function() {
      skills[index - 1] = skillName.value;
      // we use index-1 bcz the counting starts from 0 in the elements of an array
    });
  }
  function addSkillProgressEventHandler(skillProgress, index) {
    // the event handler will capture the correct value of i for each input element.
    skillProgress.addEventListener("blur", function() {
      skills_progress[index - 1] = skillProgress.value;
    });
  }

  function addEducation() {
    // Get the number of Education fields from the input
    var numEducation = document.getElementById("numEducation").value;
    // Validate the input
    if (numEducation < 1 || numEducation > 4) {
      alert("Education Fields can't exceed 4 (minimum 1)");
      return false;
    }
    // Clear the Education container
    var EducationContainer = document.getElementById("EducationContainer");
    EducationContainer.innerHTML = "";
    // Create the input fields for each Education field
    for (var i = 1; i <= numEducation; i++) {
      var FieldName = document.createElement("input");
      FieldName.type = "text";
      FieldName.placeholder = "Education Field " + i + " name" + "(in form of Field Name: courses or grades completed (period))";
      FieldName.name = "Education Field" + i;
      var EducationDiv = document.createElement("div");
      EducationDiv.appendChild(FieldName);
      EducationContainer.appendChild(EducationDiv);
      addEducationFieldEventHandler(FieldName, i);
    }
    return true;
  }

  function addEducationFieldEventHandler(FieldName, index) {
    // the event handler will capture the correct value of i for each input element.
    FieldName.addEventListener("blur", function() {
      EducationFields[index - 1] = FieldName.value;
    });
  }
  function addLanguage() {
    // Get the number of skills from the input
    var numLanguage = document.getElementById("numLanguage").value;
    // Validate the input
    if (numLanguage < 1 || numLanguage > 7) {
      alert("Education Fields can't exceed 7 (minimum 1)");
      return false;
    }
    // Clear the skills container
    var LanguageContainer = document.getElementById("LanguageContainer");
    LanguageContainer.innerHTML = "";
    // Create the input fields for each skill
    for (var i = 1; i <= numLanguage; i++) {
      var LangName = document.createElement("input");
      LangName.type = "text";
      LangName.placeholder = "Language " + i + " name" + "(in form of Language Name: proficiency)";
      LangName.name = "Language" + i;
      var LanguageDiv = document.createElement("div");
      LanguageDiv.appendChild(LangName);
      LanguageContainer.appendChild(LanguageDiv);
      addLanguageEventHandler(LangName, i);
    }
    return true;
  }
  function addLanguageEventHandler(LangName, index){
    // the event handler will capture the correct value of i for each input element.
    LangName.addEventListener("blur", function() {
      Languages[index - 1] = LangName.value;
    });
  }
  function navigate(){
    if (checkInput(event)==true){
      // we will set all the items that we need to move to the second page using the localStorage method
      if(addEducation()==true && addLanguage()==true && addSkills()==true){
      const nameinput=document.getElementById('Name');
      localStorage.setItem('person-name', nameinput.value);
      const aboutinput=document.getElementById('about2');
      localStorage.setItem('about-text-template', aboutinput.value);
      const phoneinput=document.getElementById('phone_nbr');
      localStorage.setItem('PHONE_NBR', phoneinput.value);
      const wainput=document.getElementById('whatsapp');
      localStorage.setItem('WA', wainput.value);
      const imgURL=document.getElementById('picUrl');
      localStorage.setItem('image-template', imgURL.value);
      const location_input=document.getElementById('Location-description');
      localStorage.setItem('location-description-template', location_input.value);
      const location_url=document.getElementById('Location-URL');
      localStorage.setItem('location-URL-template', location_url.value);
      const email_input=document.getElementById('email-input');
      localStorage.setItem('email-link', email_input.value);
      const fb_input=document.getElementById('facebook');
      localStorage.setItem('fb-link', fb_input.value);
      const lnkdin_input=document.getElementById('linkedin');
      localStorage.setItem('lnkdin-link', lnkdin_input.value);
      const github_input=document.getElementById('github');
      localStorage.setItem('github-link', github_input.value);
      localStorage.setItem('educationFields', EducationFields.join(","));
      localStorage.setItem('lang-field', Languages.join(","));
      localStorage.setItem('skills-part', skills.join(","));
      localStorage.setItem('skill-progress', skills_progress.join(","));
      window.open('final.html');
      }
      else{
        alert("Please make sure that the fields of Education, Languages, and skills are not empty.");
        return false;
      }
    }
    return false;
  }

