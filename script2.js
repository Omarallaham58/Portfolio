window.onload=function(){
    // we will use the localStorage method to transfer the data from the form page to the final page
const personName=localStorage.getItem('person-name');
document.getElementById('person-name').innerHTML=personName;
document.getElementById('copyright').innerHTML="Copyright © 2023 "+personName+". All rights reserved.";
localStorage.removeItem('person-name');//This eleminates this element from the local storage after we are done.
const AboutYou=localStorage.getItem('about-text-template');
document.getElementById('about-text-template').innerHTML=AboutYou;
localStorage.removeItem('about-text-template');
const YourPhone=localStorage.getItem('PHONE_NBR');
if(YourPhone!=''){
document.getElementById('PHONE_NBR').innerHTML='Phone Number: '+YourPhone;
}
else{// if the phone number field is empty so we execute this command to hide the list 
    document.getElementById('Phone-list').style.display="none";
}
localStorage.removeItem('PHONE_NBR');
const WHATSAPP=localStorage.getItem('WA');
if(WHATSAPP!=''){
document.getElementById('WA').href="https://wa.me/"+WHATSAPP;
}
else{// hide the whatsapp logo if no whatsapp number is entered
document.getElementById('WA-img').style.display="none";
}
localStorage.removeItem('WA');
const PIC_URL=localStorage.getItem('image-template');
// let URL2=PIC_URL;
if(PIC_URL!=''){
    document.getElementById('image-template').src=PIC_URL;
}
else{//if no URL is inserted, we will keep a deafult picture
    document.getElementById('image-template').src="Assets/portf_pic_deafult.png"
}
localStorage.removeItem('image-template');
const LOCATION_URL=localStorage.getItem('location-URL-template');
const LOCATION_DESCRIPTION=localStorage.getItem('location-description-template');
if(LOCATION_DESCRIPTION!=''){
    document.getElementById('location-URL-template').innerHTML=LOCATION_DESCRIPTION;
    if(LOCATION_URL!=''){
        document.getElementById('location-URL-template').href=LOCATION_URL;
    }
}
else{//hide the list of location if no location was entered
    document.getElementById('location-list').style.display="none";
    document.getElementById('location-heading').style.display="none";
    document.getElementById('location-URL-template').style.display="none";
}
localStorage.removeItem('location-URL-template');
localStorage.removeItem('location-description-template');
const YourEmail=localStorage.getItem('email-link');
if(YourEmail!=''){
    document.getElementById('email-link').href="mailto:"+YourEmail;
    document.getElementById('email-link').innerHTML=YourEmail;
}
else{// hide the email space (list) if there was no email entered
    document.getElementById('email-list').style.display="none";
    document.getElementById('email-heading').style.display="none";
    document.getElementById('email-link').style.display="none";
}
localStorage.removeItem('email-link');
const FB=localStorage.getItem('fb-link');
if(FB!=''){
    document.getElementById('fb-link').href=FB;
}
else{// hide the facebook logo in case no URL was entered
    document.getElementById('fb-link').style.display="none";
    document.getElementById('fb-img').style.display="none";
}
localStorage.removeItem('fb-link');
const LINKEDIN=localStorage.getItem('lnkdin-link');
if(LINKEDIN!=''){
    document.getElementById('lnkdin-link').href=LINKEDIN;
}
else{// hide the linkedin logo in case no URL was entered
    document.getElementById('lnkdin-link').style.display="none";
    document.getElementById('lnkdin-img').style.display="none";
}
localStorage.removeItem('lnkdin-link');
const GITHUB=localStorage.getItem('github-link');
if(GITHUB!=''){
    document.getElementById('github-link').href=GITHUB;
}
else{// hide the github logo if no URL was entered
    document.getElementById('github-link').style.display="none";
    document.getElementById('github-img').style.display="none";
}
localStorage.removeItem('github-link');
var EDUCATION_FIELDS=localStorage.getItem('educationFields').split(",");// gets the array of education fields
var edu_list=document.getElementById('edu-list');
for(let i=0;i<EDUCATION_FIELDS.length;i++){
    var edu_list_item=document.createElement("li");
    edu_list_item.innerHTML=EDUCATION_FIELDS[i];
    edu_list.appendChild(edu_list_item);
    if(edu_list_item==''){
        edu_list_item.style.display="none";
    }
}
var LANGUAGES=localStorage.getItem('lang-field').split(",");// gets the array of Languages from localStorage (set in script.js)
var lang_list=document.getElementById('lang-list');
for(let i=0;i<LANGUAGES.length;i++){
    var lang_list_item=document.createElement("li");
    lang_list_item.innerHTML=LANGUAGES[i];
    lang_list.appendChild(lang_list_item);
    if(lang_list_item==''){
        lang_list_item.style.display="none";
    }
}
var SKILLS=localStorage.getItem('skills-part').split(",");// gets the array of skill names from localStorage
var SKILLS_PROGRESS=localStorage.getItem('skill-progress').split(",");// gets the progress array of each skill
var skill_list=document.getElementById('skills-div');
for(let i=0;i<SKILLS.length;i++){
    var skill_list_item=document.createElement("div");
    var skill_list_description=document.createElement("p");
    var skill_list_progress=document.createElement("progress");
    skill_list_description.textContent=SKILLS[i];
    skill_list_progress.max=100;
    skill_list_progress.value=parseInt(SKILLS_PROGRESS[i]);
    skill_list_item.appendChild(skill_list_description);
    skill_list_item.appendChild(skill_list_progress);
    skill_list.appendChild(skill_list_item);
}
}