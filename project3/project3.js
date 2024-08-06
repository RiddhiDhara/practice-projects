const clock = document.getElementById("time_area");

let date = new Date();
console.log(date.toLocaleTimeString());

//  now to run the time continuously without refreshing we will be using the setInterval function

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
