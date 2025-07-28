const Celsius=document.getElementById("celsius")
const Fahrenheit=document.getElementById("fahrenheit")
const DisplayResult=document.getElementById("display")
const calculateButton=document.getElementById("calculateBtn")
let toCelsius
let toFahrenheit

calculateButton.addEventListener("click",function(){
    const InputTemp=document.getElementById("inputTemp").value 
    if (InputTemp === "") {
        DisplayResult.innerHTML = '<span style="color:red;">Please enter a temperature value!</span>';
        return;
    }

    if (isNaN(InputTemp)) {
        DisplayResult.innerHTML = '<span style="color:red;">Please enter a valid number!</span>';
        return;
    }
    if(Celsius.checked){
        toCelsius=(5/9*(InputTemp-32)).toFixed(2);
        DisplayResult.innerHTML=`${toCelsius}°C`
        DisplayResult.style.color='black'
    }
    else if(Fahrenheit.checked){
        toFahrenheit=((9/5* InputTemp)+32).toFixed(2)
        DisplayResult.innerHTML=` ${toFahrenheit}°F`
        DisplayResult.style.color='black'

    }
    else{
        DisplayResult.innerHTML=`Please Select an option!`
        DisplayResult.style.color='red';
    }
})

Celsius.addEventListener("change", function() {
    DisplayResult.innerHTML = "";
});
Fahrenheit.addEventListener("change", function() {
    DisplayResult.innerHTML = "";
});

