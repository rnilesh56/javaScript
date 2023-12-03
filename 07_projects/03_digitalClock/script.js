const clock = document.getElementById("clock");

setInterval((e) => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);
