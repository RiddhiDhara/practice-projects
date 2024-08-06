//  donot use onclick attribute in the html

const buttons = document.querySelectorAll(".color-box");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  const listen = button.addEventListener("click", function (event) {
    if(event.target.id === "red")
    {
        body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === "green")
    {
        body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === "orange")
    {
        body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === "blue")
    {
        body.style.backgroundColor = event.target.id;
    }
  });
});
