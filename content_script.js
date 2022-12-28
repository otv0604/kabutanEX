// 前日終値取得
var zen = parseInt(
  Array.from(
    document.getElementsByClassName("floatr"))[0].textContent.replaceAll(",", "")
  );

// thを限定している
const kl = document.getElementById("kobetsu_left");
const tb = kl.getElementsByTagName("tbody")[0];
const th = tb.getElementsByTagName("th");

// 425スレ564レス
let ohlc = [];
for (let i of th) {
  ohlc.push(
    calcRatio(parseInt(i.nextElementSibling.textContent.replaceAll(",", "")),zen)
  );
}

// 424スレ469レス
function calcRatio(ohlc, zenzitu) {
  var n = 1;
  return (
    Math.floor((((ohlc - zenzitu) * 100) / zen) * Math.pow(10, n)) /
    Math.pow(10, n)
  );
}

// 挿入する位置のエレメントを取得
const h = document.getElementsByTagName("tr");

// 条件ごとにフォント変更
let arr = [];
for (let i = 0; i < 4; i++) {
  arr[i] = document.createElement("td");
  if (ohlc[i] <= -5) {
    arr[i].style.color = "blue";
    arr[i].style.fontWeight = "bold";
  } else if (ohlc[i] < 0) {
    arr[i].style.color = "blue";
  } else if (ohlc[i] == 0) {
  } else if (ohlc[i] < 5) {
    arr[i].style.color = "red";
  } else {
    arr[i].style.color = "red";
    arr[i].style.fontWeight = "bold";
  }
  arr[i].textContent = ohlc[i] + "%";
  h[i + 7].appendChild(arr[i]);
}