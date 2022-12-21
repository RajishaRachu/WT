let right=0;
let wrong=0;
let c1=0;
let c2=0;
let c3=0;
//first 
let show=()=>{
if (c1!=true){
 let a=document.getElementById("correct").checked;
if(a==true){
    document.getElementById("Showanswer").innerHTML= "right";
    right=right+1;
}
else{
    document.getElementById("Showanswer").innerHTML="wrong";
    wrong=wrong+1;
    }
 c1=document.getElementById("correct").checked;
}


}
//second
let show1=()=>{
    if(c2!=true){
    let a=document.getElementById("correct1").checked;
   if(a==true){
       document.getElementById("Showanswer1").innerHTML= "right";
       right=right+1;
   }
   else{
       document.getElementById("Showanswer1").innerHTML="wrong";
       wrong=wrong+1;
   }
   c2=document.getElementById("correct1").checked;
   }
}
   //third
   let show2=()=>{
       if(c3!=true){
    let a=document.getElementById("correct2").checked;
   if(a==true){
       document.getElementById("Showanswer2").innerHTML= "right";
       right=right+1;
   }
   else{
       document.getElementById("Showanswer2").innerHTML="wrong";
       wrong=wrong+1;
   }
   c3=document.getElementById("correct2").checked;
   }
}
   //find resut
let result=()=>{
       document.getElementById("RightA").innerHTML="right aswers:  "+right;
       document.getElementById("WrongA").innerHTML="wrong answers:  "+wrong;

}
//show answer
let showA=()=>{
 let A1 =  document.getElementById("correct").value;
 document.getElementById("S1").innerHTML="Answer:"+A1;
 let A2 =  document.getElementById("correct1").value;
 document.getElementById("S2").innerHTML="Answer:"+A2;
 let A3=  document.getElementById("correct2").value;
 document.getElementById("S3").innerHTML="Answer:"+A3;
}
