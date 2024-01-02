/*
const result = document.querySelector(".result");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    const h = parseFloat(document.getElementById("height").value);
    const w = parseFloat(document.getElementById("weight").value);

    if (!isNaN(h) && !isNaN(w) && h > 0 && w > 0) {
        // Calculate BMI
        const bmi = w / ((h / 100) * (h / 100));

        // Update result element
        result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        result.innerHTML = 'Please enter valid height and weight values.';
    }
});
*/



//*button is inside form so we have to select entire form and button is of submit type not a click



const form=document.querySelector("form")
const result = document.getElementById("results");
form.addEventListener('submit',(event)=>{
    //to prevent default actions as form tends to sumbmit info to server with url
    event.preventDefault()
    const height=parseInt(document.getElementById("Height").value)
    const weight=parseInt(document.getElementById("Weight").value)
    
    if(height<0 || isNaN(height)){
        result.innerHTML="Please enter valid height"
    }
    else if(weight<0 || isNaN(weight)){
        result.innerHTML="Please enter valid weight"
    }else{
        const BMI=((weight/(height*height))*10000).toFixed(2)
        result.innerHTML=`BMI Index: ${BMI}`
    }


})