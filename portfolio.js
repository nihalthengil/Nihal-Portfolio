function sendmail(){
    var params={
     name : document.getElementById("name").value,
     email : document.getElementById("email").value,
     message : document.getElementById("Message").value
   }
 
   
 
   emailjs.send("service_uxdivwl","template_6txkphs",params).then(function (res){
     document.getElementById("name").value="";
     document.getElementById("email").value="";
     document.getElementById("Message").value="";
     alert("success"+res.status)
   });
 }