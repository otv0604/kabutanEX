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
const newh2 = document.createElement("td");
const newh3 = document.createElement("td");
const newh4 = document.createElement("td");
if (a1 <= -5) {
  newh1.style.color = "blue";
  newh1.style.fontWeight = "bold";
} else if (a1 < 0) {
  newh1.style.color = "blue";
} else if (a1 >= 5) {
  newh1.style.fontWeight = "bold";
  newh1.style.color = "red";
} else if (a1 > 0) {
  newh1.style.color = "red";
}
if (a2 <= -5) {
  newh2.style.color = "blue";
  newh2.style.fontWeight = "bold";
} else if (a2 < 0) {
  newh2.style.color = "blue";
} else if (a2 >= 5) {
  newh2.style.fontWeight = "bold";
  newh2.style.color = "red";
} else if (a2 > 0) {
  newh2.style.color = "red";
}
if (a3 <= -5) {
  newh3.style.color = "blue";
  newh3.style.fontWeight = "bold";
} else if (a3 < 0) {
  newh3.style.color = "blue";
} else if (a3 >= 5) {
  newh3.style.fontWeight = "bold";
  newh3.style.color = "red";
} else if (a3 > 0) {
  newh3.style.color = "red";
}
if (a4 <= -5) {
  newh4.style.color = "blue";
  newh4.style.fontWeight = "bold";
} else if (a4 < 0) {
  newh4.style.color = "blue";
} else if (a4 >= 5) {
  newh4.style.fontWeight = "bold";
  newh4.style.color = "red";
} else if (a4 > 0) {
  newh4.style.color = "red";
}
newh1.textContent = a1 + "%";
h[7].appendChild(newh1);
newh2.textContent = a2 + "%";
h[8].appendChild(newh2);
newh3.textContent = a3 + "%";
h[9].appendChild(newh3);
newh4.textContent = a4 + "%";
h[10].appendChild(newh4);
