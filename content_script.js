var li01 = Array.from(document.getElementsByTagName("td"));
console.log(li01[23]);
var hajimene = parseInt(li01[23].textContent.replaceAll(",", ""));
var takane = parseInt(li01[26].textContent.replaceAll(",", ""));

var li02 = Array.from(document.getElementsByClassName("floatr"));
console.log(li02);
console.log(li02[0].textContent);
var zen = parseInt(li02[0].textContent.replaceAll(",", ""));
console.log(zen);

var a1 = ((hajimene - zen) * 100) / zen;
var a2 = ((takane - zen) * 100) / zen;
var n = 1;
var a11 = Math.floor(a1 * Math.pow(10, n)) / Math.pow(10, n);
var a22 = Math.floor(a2 * Math.pow(10, n)) / Math.pow(10, n);
console.log(a11);
console.log(a22);

const h = document.getElementsByTagName("th");
console.log(h);
const newh1 = document.createElement("td");
newh1.textContent = a11 + "%";
h[9].appendChild(newh1);

const newh2 = document.createElement("td");
newh2.textContent = a22 + "%";
h[10].appendChild(newh2);
