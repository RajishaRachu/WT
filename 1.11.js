let Fun= ()=>{
//first name
let fname=document.getElementById("name1").value;
var name="Firstname:"+" "+fname 
document.getElementById("fname").innerHTML=name;
//last name
let Lname=document.getElementById("Lname").value; 
document.getElementById("lname").innerHTML=" Lastname:"+" "+Lname; 
//genter
let G=document.getElementById("g").value;
document.getElementById("Genter").innerHTML="Genter:"+" "+ G;
//Adress
let A=document.getElementById("Address").value;
document.getElementById("address").innerHTML="Adress:"+" "+ A;
//age
let B=document.getElementById("age").value;
document.getElementById("Age").innerHTML="Age:"+" "+ B;
//Phone
let C=document.getElementById("phone").value
document.getElementById("Phone").innerHTML="Phone Number:"+" "+C;
//Image
//Course
let D=document.getElementById("course").value;
document.getElementById("Course").innerHTML="Your Course"+" "+D;
//percentage
let E=document.getElementById("percentage").value;
document.getElementById("Percentage").innerHTML="percentage you got"+" "+E+"%";
//Email
let F=document.getElementById("email").value;
document.getElementById("Email").innerHTML="Email ID"+" "+F;
//Password
var x = document.getElementById("myPsw").value;
  document.getElementById("demo").innerHTML ="YOUR PASSWORD:"+""+ x;


};
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};