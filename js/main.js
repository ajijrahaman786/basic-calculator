// get all btn
let clickBtn    = document.querySelectorAll('.btn-grey');
console.log(clickBtn);
let display     = document.querySelector(".display");
let btnOperator = document.querySelectorAll('.btn-operator');
// set click event for each of btn
clickBtn.forEach(function(btn, index){
    btn.addEventListener("click", function(){
        
        let btnVal = document.getElementById(`btn${index+1}`).value;
        console.log(btnVal);

        display.textContent += btnVal;

    });


});