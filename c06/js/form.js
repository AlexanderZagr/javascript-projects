var elForm = document.getElementById('formSignup');
var elSelectPackage = document.getElementById('package');
var elPackageHint = document.getElementById('packageHint');
var elTerms = document.getElementById('terms');
var elTermsHint = document.getElementById('termsHint');

function packageHint() {
    var pack = this.options[this.selectedIndex].value;
    if (pack === 'monthly') {
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!'
    } else {
        elPackageHint.innerHTML = 'Wise choice!';
    }
}

function checkTerms(event) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = 'You must agree to the terms.';
        event.preventDefault();
    }
}

if (addEventListener) {
    elForm.addEventListener('submit', checkTerms, false);
    elSelectPackage.addEventListener('change', packageHint, false);
} else {
    elForm.attachEvent('onsubmit', checkTerms, false);
    elSelectPackage('onchange', packageHint);
}
