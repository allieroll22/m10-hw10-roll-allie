// It is always helpful to use comments in your code!
//const boilingTemp = document.createTextNode(' 212');
//const freezingTemp = document.createTextNode('32');
//const waterTemp = document.createTextNode('100');

const boilingSpan = document.getElementById('boiling-temp');
const boilingTemp = document.createTextNode(' 212');
boilingSpan.appendChild(boilingTemp);

//const boiling = () => boilingSpan.appendChild(boilingTemp);

const freezingSpan = document.getElementById('freezing-temp');
const freezingTemp = document.createTextNode('32');
freezingSpan.appendChild(freezingTemp);

//const freezing = () => freezingSpan.appendChild(freezingTemp);


const waterSpan = document.getElementById('water-temp');
const waterTemp = document.createTextNode('300');
waterSpan.appendChild(waterTemp);

//const water = () => waterSpan.appendChild(waterTemp);

let hotTemp = document.getElementById('good-temp');

setTimeout(function(){
  if (waterTemp > 212){
    hotTemp.classList.remove("hide").add("show");
  }

}, 3000);
/*

 boilingSpan.appendChild(boilingTemp);
  freezingSpan.appendChild(freezingTemp);
  waterSpan.appendChild(waterTemp);

let goodTemp = document.getElementById('good-temp');
setTimeout(functionRun, 3000);

*/
