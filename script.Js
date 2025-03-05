

document.addEventListener("DOMContentLoaded", () => {
     let ShowVle = document.querySelector(".display input");
     let AllBtn = document.querySelectorAll(".AllBtn");
     let isResultDisplayed = false;
     
    AllBtn.forEach(Button => {
        Button.addEventListener("click", (event) => {
           let value = event.target.value;
           
          if( value === "="){
            try{
               ShowVle.value = eval(ShowVle.value);

               isResultDisplayed = true;
            
            } catch (error){
               ShowVle.value = "error";
            }
          }else if(value === "AC"){
            ShowVle.value = "";
            isResultDisplayed = false;

          }else if( value === "DE"){
            ShowVle.value = ShowVle.value.slice(0, -1);

          }else{
            if (isResultDisplayed) {
                ShowVle.value = "";
                isResultDisplayed = false;
            };
            ShowVle.value += value;
            
          };   
          
        });
     });
});