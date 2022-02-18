// const hourTxt = document.querySelector("#hours");
// const minuteTxt = document.querySelector("#minutes");
// const secondTxt = document.querySelector("#second");
// const miliTxt = document.querySelector("#milisecond");

// const btnStart = document.querySelector(".start");
// const btnStop = document.querySelector(".stop");
// const btnReset = document.querySelector(".reset");

// let hr = 0;
// let min = 0;
// let sec = 0;
// let mili = 0;
// let timer = false;

// btnStart.addEventListener("click", function (e) {
//   // Handle button
//   this.classList.add("disable");
//   btnStop.classList.remove("disable");
//   btnReset.classList.add("disable");

//   // Handle function
//   timer = true;
//   stopwatch();
// });

// btnStop.addEventListener("click", function (e) {
//   // Handle button
//   this.classList.add("disable");
//   btnStart.classList.remove("disable");
//   btnReset.classList.remove("disable");

//   // Handle function
//   timer = false;
// });

// btnReset.addEventListener("click", function (e) {
//   // Handle button
//   this.classList.remove("disable");
//   btnStop.classList.add("disable");
//   btnReset.classList.add("disable");

//   // Handle function
//   timer = false;
//   hr = 0;
//   min = 0;
//   sec = 0;
//   count = 0;
//   hourTxt.innerHTML = "00";
//   minuteTxt.innerHTML = "00";
//   secondTxt.innerHTML = "00";
//   miliTxt.innerHTML = "00";
// });

// function formatNumber(number) {
//   return number < 10 ? `0${number}` : number;
// }

// function stopwatch() {
//   if (timer) {
//     mili += 1;

//     if (mili === 100) {
//       sec += 1;
//       mili = 0;
//     }
//     if (sec === 60) {
//       min += 1;
//       sec = 0;
//     }
//     if (min === 60) {
//       hr += 1;
//       min = 0;
//       sec = 0;
//     }

//     hourTxt.innerHTML = hr;
//     minuteTxt.innerHTML = min;
//     secondTxt.innerHTML = sec;
//     miliTxt.innerHTML = mili;

//     setTimeout("stopwatch()",10);
//   }
// }

const hourTxt = document.querySelector("#hours");
const minuteTxt = document.querySelector("#minutes");
const secondTxt = document.querySelector("#second");
const miliTxt = document.querySelector("#milisecond");

const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let hr = 0;
let min = 0;
let sec = 0;
let mili = 0;
let timer = false;
let myInterval;

btnStart.addEventListener("click", function (e) {
  // Handle button
  this.classList.add("disable");
  btnStop.classList.remove("disable");
  btnReset.classList.add("disable");

  // Handle function
  timer = true;

  clearInterval(myInterval);
  myInterval = setInterval(stopwatch, 10);
});

btnStop.addEventListener("click", function (e) {
  // Handle button
  this.classList.add("disable");
  btnStart.classList.remove("disable");
  btnReset.classList.remove("disable");

  // Handle function
  timer = false;
});

btnReset.addEventListener("click", function (e) {
  // Handle button
  this.classList.remove("disable");
  btnStop.classList.add("disable");
  btnReset.classList.add("disable");

  // Handle function
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  hourTxt.innerHTML = "00";
  minuteTxt.innerHTML = "00";
  secondTxt.innerHTML = "00";
  miliTxt.innerHTML = "00";

  clearInterval(myInterval);
});

function formatNumber(number) {
  return number < 10 ? `0${number}` : number;
}

function stopwatch() {
  if (timer) {
    mili += 1;

    if (mili === 100) {
      sec += 1;
      mili = 0;
    }
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
    if (min === 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }

    hourTxt.innerHTML = hr;
    minuteTxt.innerHTML = min;
    secondTxt.innerHTML = sec;
    miliTxt.innerHTML = mili;
  }
}
