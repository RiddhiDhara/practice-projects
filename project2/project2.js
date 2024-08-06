const form = document.querySelector("form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultElement = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // to prevent default submit action
  
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  
  if (isNaN(height) || height <= 0) {
    resultElement.innerHTML = "Enter valid height.";
  } else if (isNaN(weight) || weight <= 0) {
    resultElement.innerHTML = "Enter valid weight.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    resultElement.innerHTML = `Your BMI is: ${bmi}`;
  }
});




// --------------------------------------------------------------------- sirs

// const form = document.querySelector("form");
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let height = parseInt(document.querySelector("#height").value);
//   let weight = parseInt(document.querySelector("#weight").value);
//   let results = parseInt(document.querySelector(".result").value);

//   if (height === "" || height < 0 || isNaN(height)) 
//     {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } 
//   else if (weight === "" || weight < 0 || isNaN(weight)) 
//     {
//     results.innerHTML = `Please give a valid height ${weight}`;
//   } 
//   else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2); //show the result
//     results.innerHTML = bmi;
//   }
// });