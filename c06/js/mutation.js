var elList = document.getElementById('list');
var addLink = document.querySelector('a');
var counter = document.getElementById('counter');

function addItem(e) {
    e.preventDefault();
    var newEl = document.createElement('li');
    var newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    var listItems = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

if (addEventListener) {
    addLink.addEventListener('click', addItem, false);
    elList.addEventListener('DOMNodeInserted', updateCount, false);
} else {
    addLink.attachEvent('onclick', addItem);
    elList.attachEvent('DOMNodeInserted', updateCount);
}