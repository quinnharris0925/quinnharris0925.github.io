var display = "0";
const myDisplay = document.getElementById("display");
myDisplay.textContent = display;
function updateDisplay(){
    myDisplay.textContent = display;
}

function append(value){
    if (display=="0"){
        display=value;
    }else{
        display+=value;
    }
    updateDisplay();
}

let nums = document.querySelectorAll('.nums');
for (let i=0; i<nums.length; i++){
    nums[i].addEventListener("click", append(n.value))
}