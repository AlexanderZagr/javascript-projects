var colors = ['white', 'black', 'custom'];
var anotherColors = new Array('white', 'black', 'custom');

var elColor = document.getElementById('color');
elColor.textContent = colors[0];

var elAnotherColor = document.getElementById('anotherColor');
elAnotherColor.innerHTML = anotherColors[2];