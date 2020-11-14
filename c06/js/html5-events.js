function setup() {
    var textInput = document.getElementById('message');
    textInput.focus();
}

if (addEventListener) {
    window.addEventListener('DOMContentLoaded', setup, false);
    window.addEventListener('beforeunload', function (event) {
        var message = 'You have changes that have not been saved';
        (event || window.event).returnValue = message;
        return message;
    }, false);
} else {
    window.attachEvent('DOMContentLoaded', setup);
    window.attachEvent('beforeunload', function (event) {
        var message = 'You have changes that have not been saved';
        (event || window.event).returnValue = message;
        return message;
    });
}
