if (Modernizr.sessionstorage) {

    var textUsername = document.getElementById('username2');
    var textAnswer = document.getElementById('answer2');

    textUsername.value = sessionStorage.getItem('username2');
    textAnswer.value = sessionStorage.getItem('answer2');

    textUsername.addEventListener('input', function () {
        sessionStorage.setItem('username2', textUsername.value);
    }, false);

    textAnswer.addEventListener('input', function () {
        sessionStorage.setItem('answer2', textAnswer.value);
    }, false);
}