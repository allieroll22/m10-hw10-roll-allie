'use strict';

// It is always helpful to use comments in your code!
//const boilingTemp = document.createTextNode(' 212');
//const freezingTemp = document.createTextNode('32');
//const waterTemp = document.createTextNode('100');

var boilingSpan = document.getElementById('boiling-temp');
var boilingTemp = document.createTextNode(' 212');
var boiling = function boiling() {
  return boilingSpan.appendChild(boilingTemp);
};

var freezingSpan = document.getElementById('freezing-temp');
var freezingTemp = document.createTextNode('32');
var freezing = function freezing() {
  return freezingSpan.appendChild(freezingTemp);
};

var waterSpan = document.getElementById('water-temp');
var waterTemp = document.createTextNode('300');
var water = function water() {
  return waterSpan.appendChild(waterTemp);
};

var hotTemp = document.getElementById('good-temp');

setTimeout(function () {
  if (waterTemp > 212) {
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