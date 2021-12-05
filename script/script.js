"use strict";
function myFunction() {
  var x = document.getElementById("my-nav-bar-mini");
  if (x.className === "nav-bar-mini") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar-mini";
  }
}
var myWindow;

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
    alert("Poslali ste vašu poruku.😊😊😊");
    myWindow();
    window.location.reload();
  }
});

function obrisi() {
  document.querySelector(".ime").textContent = " ";
  document.querySelector(".prezime").textContent = " ";
  document.querySelector(".e-mail").textContent = " ";
  document.querySelector(".poruka").textContent = " ";
}

$(".obrisi-btn").click(obrisi);

var kranjiDatum = new Date("December 28, 2021 16:37:52").getTime();

var tajmer = setInterval(function () {
  var sada = new Date().getTime();
  var preostalo = kranjiDatum - sada;

  var dani = Math.floor(preostalo / (1000 * 60 * 60 * 24));
  var sati = Math.floor((preostalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuti = Math.floor((preostalo % (1000 * 60 * 60)) / (1000 * 60));
  var sekunde = Math.floor((preostalo % (1000 * 60)) / 1000);

  document.getElementById("dani").innerHTML = dani + "d ";
  document.getElementById("sati").innerHTML = sati + "h ";
  document.getElementById("minuti").innerHTML = minuti + "m ";
  document.getElementById("sekunde").innerHTML = sekunde + "s ";

  if (preostalo < 0) {
    clearInterval(tajmer);
    document.getElementById("dani").innerHTML = "";
    document.getElementById("sati").innerHTML = "";
    document.getElementById("minuti").innerHTML = "";
    document.getElementById("sekunde").innerHTML = "";
    document.getElementById("kraj").innerHTML = "AKCIJA JE ZAVRŠENA!";
  }
}, 1000);

$(".posalji").click(function () {
  if ($("input[type=checkbox]:checked").length < 1) {
    alert("Niste popunili sva polja.😒");
  } else {
    alert("Hvala Vam što ste popunili našu malu anketu !!!");
  }
});
