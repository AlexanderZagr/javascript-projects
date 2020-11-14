function charCount(e) {
    var textEntered = document.getElementById('message').value;

    var charDisplay = document.getElementById('charactersLeft');
    var counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;

    var lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}

var el = document.getElementById('message');

if (el.addEventListener) {
    el.addEventListener('keyup', function (e) {
        charCount(e);
    }, false)
} else {
    el.attachEvent('onkeyup', function (e) {
        charCount(e);
    });
}