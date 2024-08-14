//generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalid;

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

start.addEventListener("click", () => {
  if (!intervalid) {
    intervalid = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(intervalid);
  intervalid = null;
});
