var removeEl = document.getElementsByTagName('li')[3];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

var removeElSecond = document.getElementsByTagName('li')[0];
var removeContainerSecond = document.getElementsByTagName('ul')[0];
removeContainerSecond.removeChild(removeElSecond);