// get all btn
const clickBtn      = document.querySelectorAll('.btn-grey');
console.log(clickBtn);
const display       = document.querySelector(".display");
const btnOperator   = document.querySelectorAll('.btn-operator');
const equal_btn		= document.querySelector('.btn-equal');
const clear_btn     = document.querySelector(".btn-clear");

let flag = false;
// set click event for number btn
clickBtn.forEach(function(btnNum, index){
    btnNum.addEventListener("click", function(){
        
        let btnVal = document.getElementById(`btn${index+1}`).value;
        console.log(btnVal);

        display.textContent += btnVal;


    });


});

// set click event for operator btn

btnOperator.forEach(function(btnOp, index){
    btnOp.addEventListener("click", function(){
        let operatorVal =btnOp.value;

        // let operatorDot = document.getElementById("dotOperator").value;

        if(flag){
            return
        }

        display.textContent += operatorVal;
        flag = true;

    });


});

equal_btn.addEventListener("click", function() {
	display.textContent = eval(display.textContent);
});

clear_btn.addEventListener("click", function() {
    location.reload();
});
