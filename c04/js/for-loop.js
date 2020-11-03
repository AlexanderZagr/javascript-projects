var scores = [24, 32, 17];
var roundNumber = 0;
var msg = '';

for (var i = 0; i < scores.length; i++) {

    roundNumber = (i + 1);

    msg += 'Round ' + roundNumber + ': ';

    msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;