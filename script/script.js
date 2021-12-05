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
var myWindow;
//let posalji = document.getElementsByClassName("posalji")[0];

function myWindow() {
  myWindow = window.open(
    "",
    "myWindow",
    "width=200,height=100, top=100,left=500,"
  );
  myWindow.document.write(
    "Ime: " +
      $(".ime").val() +
      "\n" +
      "Prezime: " +
      "\n" +
      $(".prezime").val() +
      "\n" +
      "E-mail: " +
      $(".e-mail").val() +
      "\n" +
      "Poruka: " +
      $(".poruka").val()
  );
}

$(".open").click(function () {
  if (document.querySelector(".ime").value === "") {
    alert("Niste popunili sva polja.😒");
  } else if (document.querySelector(".prezime").value === "") {
    alert("Niste popunili sva polja.😒");
  } else if (document.querySelector(".e-mail").value === "") {
    alert("Niste popunili sva polja.😒");
  } else if ($("input[type=radio]:checked").length < 1) {
    alert("Niste popunili sva polja.😒");
  } else if (document.querySelector(".poruka").value === "") {
    alert("Niste popunili sva polja.😒");
  } else {
    alert("Poslali ste vasu poruku.😊😊😊");
    myWindow();
    window.location.reload();
  }
});

// posalji.addEventListener("click", function () {
//   console.log("cao bela");
// });

// document
//   .querySelector(".posalji-btn")
//   .addEventListener("click", function () {});
function obrisi() {
  document.querySelector(".ime").textContent = " ";
  document.querySelector(".prezime").textContent = " ";
  document.querySelector(".e-mail").textContent = " ";
  document.querySelector(".poruka").textContent = " ";
}

// let obr = document.querySelector(".obrisi-btn");
// obr.addEventListener("click", obrisi());
$(".obrisi-btn").click(obrisi);

// The data/time we want to countdown to
var kranjiDatum = new Date("December 25, 2021 16:37:52").getTime();

// Run myfunc every second
var tajmer = setInterval(function () {
  var sada = new Date().getTime();
  var preostalo = kranjiDatum - sada;

  // Calculating the dani, sati, minuti and skeunde left
  var dani = Math.floor(preostalo / (1000 * 60 * 60 * 24));
  var sati = Math.floor((preostalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuti = Math.floor((preostalo % (1000 * 60 * 60)) / (1000 * 60));
  var skeunde = Math.floor((preostalo % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("dani").innerHTML = dani + "d ";
  document.getElementById("sati").innerHTML = sati + "h ";
  document.getElementById("minuti").innerHTML = minuti + "m ";
  document.getElementById("sekunde").innerHTML = skeunde + "s ";

  // Display the message when countdown is over
  if (preostalo < 0) {
    clearInterval(tajmer);
    document.getElementById("dani").innerHTML = "";
    document.getElementById("sati").innerHTML = "";
    document.getElementById("minuti").innerHTML = "";
    document.getElementById("sekunde").innerHTML = "";
    document.getElementById("kraj").innerHTML = "KRAJ!";
  }
}, 1000);
