var li01 = Array.from(document.getElementsByTagName("td"));
var hajimene = parseInt(li01[23].textContent.replaceAll(",", ""));
var takane = parseInt(li01[26].textContent.replaceAll(",", ""));
var yasune = parseInt(li01[29].textContent.replaceAll(",", ""));
var owarine = parseInt(li01[32].textContent.replaceAll(",", ""));
var li02 = Array.from(document.getElementsByClassName("floatr"));
var zen = parseInt(li02[0].textContent.replaceAll(",", ""));

var n = 1;
var a1 =
  Math.floor((((hajimene - zen) * 100) / zen) * Math.pow(10, n)) /
  Math.pow(10, n);
var a2 =
  Math.floor((((takane - zen) * 100) / zen) * Math.pow(10, n)) /
  Math.pow(10, n);
var a3 =
  Math.floor((((yasune - zen) * 100) / zen) * Math.pow(10, n)) /
  Math.pow(10, n);
var a4 =
  Math.floor((((owarine - zen) * 100) / zen) * Math.pow(10, n)) /
  Math.pow(10, n);

const h = document.getElementsByTagName("tr");
console.log(h);

const newh1 = document.createElement("td");
newh1.textContent = a1 + "%";
h[7].appendChild(newh1);
const newh2 = document.createElement("td");
newh2.textContent = a2 + "%";
h[8].appendChild(newh2);
const newh3 = document.createElement("td");
newh3.textContent = a3 + "%";
h[9].appendChild(newh3);
const newh4 = document.createElement("td");
newh4.textContent = a4 + "%";
h[10].appendChild(newh4);
