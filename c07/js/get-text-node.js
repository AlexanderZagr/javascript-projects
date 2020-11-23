$(function () {
    var $listItemHtml = $('li').text();
    $('li').append('<i>' + $listItemHtml + '</i>');
});