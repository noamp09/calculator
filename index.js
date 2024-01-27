// Calculator program

const display = document.getElementById("display");
const abc = "abcdefghijklmnopqrstuvwxyz"

function addToDisplay(input){
    for (let i of abc)
    {
        if (display.value.includes(i)){
            clearDisplay();
            break;
        }
    }
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}

function clearDisplay(){
    display.value = "";
}
