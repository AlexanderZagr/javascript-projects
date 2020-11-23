$(function () {
    $('li').each(function () {
        var ids = this.id;
        $(this).append(' <span id="order">' + ids + '</span>');
    });
});