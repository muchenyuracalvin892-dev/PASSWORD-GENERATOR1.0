
   
    
   



   function generate(){
   
  var  main_display =document.getElementById("display");
  let tmp="";
    let lcase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      let capital_letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
         const numbers=[0,1,2,3,4,5,6,7,8,9];
     const symbols=['!','@','#','$','%','^','&','*','(',')','-','_','=','+'];
const length=12;

       tmp += lcase[Math.floor(Math.random()*26+1)];
           tmp += capital_letters[Math.floor(Math.random()*26+1)];
                 tmp += numbers[Math.floor(Math.random()*9+1)];
                      tmp += symbols[Math.floor(Math.random()*14+1)];
                         tmp += lcase[Math.floor(Math.random()*26+1)];
                      tmp += capital_letters[Math.floor(Math.random()*26+1)];
                 tmp += numbers[Math.floor(Math.random()*9+1)];
             tmp += symbols[Math.floor(Math.random()*14+1)];
   
        main_display.value=tmp;
    

   }
   //for(let i=0;i<=10;i++){
  // }
     function copy(){
        var  main_display = document.getElementById("display");
        main_display.select();
        document.execCommand("copy");
     } 

   
