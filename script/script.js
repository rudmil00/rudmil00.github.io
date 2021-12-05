"use strict";
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("my-nav-bar-mini");
  if (x.className === "nav-bar-mini") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar-mini";
  }
}

// $(".posalji-btn").click(function () {
//   if ($("ime").textContent == " ") {
//     console.log(this.textContent);
//     alert("Niste popunili sva polja.😒");
//   } else if ($("prezime").textContent == " ") {
//     alert("Niste popunili sva polja.😒");
//   } else if ($("e-mail").textContent == " ") {
//     alert("Niste popunili sva polja.😒");
//   } else if ($("poruka").textContent == " ") {
//     alert("Niste popunili sva polja.😒");
//   } else alert("Poslali ste vasu poruku.😊😊😊");
// });

// posalji.addEventListener("click", function () {
//   console.log("cao bela");
// });

// document
//   .querySelector(".posalji-btn")
//   .addEventListener("click", function () {});

let obrisi = document.querySelector(".obrisi-btn");
obrisi.addEventListener("click", function () {
  document.querySelector(".ime").textContent = " ";
  document.querySelector(".prezime").textContent = " ";
  document.querySelector(".e-mail").textContent = " ";
  document.querySelector(".poruka").textContent = " ";
});

// $(".open").click(function () {
//   myWindow = window.open(
//     " ",
//     "myWindow",
//     "width=300,height=200, top=100,left=500,"
//   );
//   myWindow.document.write("hey");
//   myWindow.select();
// });
