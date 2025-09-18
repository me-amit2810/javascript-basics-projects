const clock = document.querySelector(".con");

setInterval(() => {
  let date = new Date();
  const time = date.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);
