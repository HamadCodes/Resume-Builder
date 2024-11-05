const { jsPDF } = window.jspdf;

document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();


let  name= document.getElementById('name').value 
let  profession= document.getElementById('profession').value 
let about= document.getElementById('about').value 
        
let phone = document.getElementById('phone').value 
let email = document.getElementById('email').value 
let address = document.getElementById('address').value 
        
        
            
let degree1 = document.getElementById('degree1').value 
let university1 = document.getElementById('university1').value 
            
            
let degree2 = document.getElementById('degree2').value 
let university2 = document.getElementById('university2').value 
            
        
let skill1 =document.getElementById('skill1').value 
let skill2 =document.getElementById('skill2').value 
let skill3 =document.getElementById('skill3').value 
let skill4 =document.getElementById('skill4').value 
let skill5 =document.getElementById('skill5').value 
        

        
let language1 = document.getElementById('language1').value 
let language2 = document.getElementById('language2').value 
         
        
            
let company1 = document.getElementById('company1').value 
let years1 = document.getElementById('years1').value 
let job1 = document.getElementById('job1').value
            
            
let company2 = document.getElementById('company2').value 
let years2 = document.getElementById('years2').value 
let job2 = document.getElementById('job2').value 
        
        
        
            
let certification1 = document.getElementById('certification1').value
let certYear1 = document.getElementById('certYear1').value
            
            
let certification2 = document.getElementById('certification2').value
let certYear2 = document.getElementById('certYear2').value
            
            
let certification3 = document.getElementById('certification3').value
let certYear3 = document.getElementById('certYear3').value
            
        
        
            
let ref1 = document.getElementById('ref1').value
let refPhone1 = document.getElementById('refPhone1').value
let refEmail1 = document.getElementById('refEmail1').value
            
            
let ref2 = document.getElementById('ref2').value
let refPhone2 = document.getElementById('refPhone2').value
let refEmail2 = document.getElementById('refEmail2').value





let  resumename= document.getElementById('resumename') 
resumename.innerText = name

let  resumeprofession= document.getElementById('resumeprofession') 
resumeprofession.innerText=profession
let resumeabout= document.getElementById('resumeabout') 
resumeabout.innerText =about
        
let resumephone = document.getElementById('resumephone') 
resumephone.innerText = phone
let resumeemail = document.getElementById('resumeemail') 
resumeemail.innerText = email
let resumeaddress = document.getElementById('resumeaddress') 
resumeaddress.innerText =address
        
        
            
let resumedegree1 = document.getElementById('resumedegree1') 
resumedegree1.innerText = degree1
let resumeuniversity1 = document.getElementById('resumeuniversity1')
resumeuniversity1.innerText = university1
            
            
let resumedegree2 = document.getElementById('resumedegree2') 
resumedegree2.innerText = degree2
let resumeuniversity2 = document.getElementById('resumeuniversity2') 
resumeuniversity2.innerText = university2
            
        
let resumeskill1 =document.getElementById('resumeskill1') 
resumeskill1.innerText =skill1
let resumeskill2 =document.getElementById('resumeskill2') 
resumeskill2.innerText = skill2
let resumeskill3 =document.getElementById('resumeskill3') 
resumeskill3.innerText = skill3
let resumeskill4 =document.getElementById('resumeskill4') 
resumeskill4.innerText = skill4
let resumeskill5 =document.getElementById('resumeskill5') 
resumeskill5.innerText = skill5
        

        
let resumelanguage1 = document.getElementById('resumelanguage1') 
resumelanguage1.innerText = language1
let resumelanguage2 = document.getElementById('resumelanguage2') 
resumelanguage2.innerText = language2
         
        
            
let resumecompany1 = document.getElementById('resumecompany1') 
resumecompany1.innerText = company1
let resumeyears1 = document.getElementById('resumeyears1') 
resumeyears1.innerText = years1
let resumejob1 = document.getElementById('resumejob1')
resumejob1.innerText = job1
            
            
let resumecompany2 = document.getElementById('resumecompany2') 
resumecompany2.innerText = company2
let resumeyears2 = document.getElementById('resumeyears2') 
resumeyears2.innerText = years2
let resumejob2 = document.getElementById('resumejob2') 
resumejob2.innerText = job2
        
        
        
            
let resumecertification1 = document.getElementById('resumecertification1')
resumecertification1.innerText = certification1
let resumecertYear1 = document.getElementById('resumecertyear1')
resumecertYear1.innerText = certYear1
            
            
let resumecertification2 = document.getElementById('resumecertification2')
resumecertification2.innerText = certification2
let resumecertYear2 = document.getElementById('resumecertyear2')
resumecertYear2.innerText = certYear2
             
            
let resumecertification3 = document.getElementById('resumecertification3')
resumecertification3.innerText= certification3
let resumecertYear3 = document.getElementById('resumecertyear3')
resumecertYear3.innerText = certYear3
            
        
        
            
let resumeref1 = document.getElementById('resumeref1')
resumeref1.innerText = ref1
let resumerefPhone1 = document.getElementById('resumerefphone1')
resumerefPhone1.innerText = refPhone1
let resumerefEmail1 = document.getElementById('resumerefemail1')
resumerefEmail1.innerText = refEmail1
            
        
let resumeref2 = document.getElementById('resumeref2')
resumeref2.innerText = ref2
let resumerefPhone2 = document.getElementById('resumerefphone2')
resumerefPhone2.innerText = refPhone2
let resumerefEmail2 = document.getElementById('resumerefemail2')
resumerefEmail2.innerText = refEmail2

});

const profilePicture = document.getElementById("profilePicture");

document.getElementById("picture").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePicture.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("downloadPdf").addEventListener("click", () => {
  const resumeDiv = document.getElementById("page");

  
  html2canvas(resumeDiv, {
    width: 595,
    height: 842,
    scale: 2 
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    
    const pdf = new jsPDF("p", "pt", [595, 842]);

    
    pdf.addImage(imgData, "PNG", 0, 0, 595, 842);

    
    pdf.save("resume.pdf");
  });
});
