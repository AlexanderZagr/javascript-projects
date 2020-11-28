$('#register').on('submit', function (e) {
    e.preventDefault();
    var deatails = $('#register').serialize();
    $.post('register.php', deatails, function (data) {
        $('#register').html(data);
    });
});