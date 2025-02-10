const fs =require("fs");
  
  fs.readFile("randomdata.json","utf-8",(error,res)=>{
      if(error){
          console.log(error);
      }else{
          console.log(JSON.parse(res)[5].id);
         
      }
  })