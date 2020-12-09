if (Modernizr.localstorage) {
    var textUsername = document.getElementById('username');
    var textAnswer = document.getElementById('answer');

    textUsername.value = localStorage.getItem('username');
    textAnswer.value = localStorage.getItem('answer');

    textUsername.addEventListener('input', function () {
        localStorage.setItem('username', textUsername.value);
    }, false);

    textAnswer.addEventListener('input', function () {
        localStorage.setItem('answer', textAnswer.value);
    }, false);
}