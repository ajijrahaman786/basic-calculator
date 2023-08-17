// get all btn
const clickBtn    = document.querySelectorAll('.btn-grey');
console.log(clickBtn);
const display     = document.querySelector(".display");
const btnOperator = document.querySelectorAll('.btn-operator');
const equal_btn		= document.querySelector('.btn-equal');
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
        let operatorVal = document.getElementById(`operator${index+1}`).value;
        console.log(operatorVal);
        display.textContent += operatorVal;

    });


});

equal_btn.addEventListener("click", function() {
	display.textContent = eval(display.textContent);
});
