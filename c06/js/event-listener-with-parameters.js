var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minlength) {

    if (elUsername.value.length < minlength) {
        elMsg.textContent = 'Username must be ' + minlength + ' characters or more';
    } else {
        elMsg.textContent = '';
    }
}

elUsername.addEventListener('blur', function () {
    checkUsername(5);
}, false);