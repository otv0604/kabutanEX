var li01 = Array.from(document.getElementsByTagName("td"));
var hajimene = parseInt(li01[23].textContent.replaceAll(",", ""));
var takane = parseInt(li01[26].textContent.replaceAll(",", ""));
var yasune = parseInt(li01[29].textContent.replaceAll(",", ""));
var owarine = parseInt(li01[32].textContent.replaceAll(",", ""));
var li02 = Array.from(document.getElementsByClassName("floatr"));
var zen = parseInt(li02[0].textContent.replaceAll(",", ""));

var n = 1;
const a = [
  Math.floor((((hajimene - zen) * 100) / zen) * Math.pow(10, n)) /
    Math.pow(10, n),
  Math.floor((((takane - zen) * 100) / zen) * Math.pow(10, n)) /
    Math.pow(10, n),
  Math.floor((((yasune - zen) * 100) / zen) * Math.pow(10, n)) /
    Math.pow(10, n),
  Math.floor((((owarine - zen) * 100) / zen) * Math.pow(10, n)) /
    Math.pow(10, n),
];

const h = document.getElementsByTagName("tr");
console.log(h);

let arr = [];
for (let i = 0; i < 4; i++) {
  arr[i] = document.createElement("td");
  if (a[i] <= -5) {
    arr[i].style.color = "blue";
    arr[i].style.fontWeight = "bold";
  } else if (a[i] < 0) {
    arr[i].style.color = "blue";
  } else if (a[i] == 0) {
  } else if (a[i] < 5) {
    arr[i].style.color = "red";
  } else {
    arr[i].style.color = "red";
    arr[i].style.fontWeight = "bold";
  }
  arr[i].textContent = a[i] + "%";
  h[i + 7].appendChild(arr[i]);
}
