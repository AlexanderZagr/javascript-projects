var today = new Date();
var hoursNow = today.getHours();
var greeting;

if (hoursNow > 18) {
    greeting = 'Good evening!';
} else if (hoursNow > 12) {
    greeting = 'Good afternoon!';
} else if (hoursNow > 6) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
