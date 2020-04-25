$(document).ready(function() {
    let login = sessionStorage.getItem('login');
    if (login !== '') {
        $('#button_login').css('display', 'none');

        $('#login').css('display', 'flex');
        $('#button_logout').css('display', 'flex');

        $('#login').val(login);
        $('#modal_inner-login').val(login);
    }
});

$('#logo').click(function() {
    location.reload();
});

$('#films_button').click(function() {
    $("#films_button").css('color','#E5261E');
    $("#films_button").css('border-bottom','2px solid #E5261E');
    $("#channels_button").css('color','#333333');
    $("#channels_button").css('border-bottom','0');

    $("#films").css('display','block');
    $("#channels").css('display','none');
});

$('#channels_button').click(function() {
    $("#films_button").css('color','#333333');
    $("#films_button").css('border-bottom','0');
    $("#channels_button").css('color','#E5261E');
    $("#channels_button").css('border-bottom','2px solid #E5261E');

    $("#films").css('display','none');
    $("#channels").css('display','block');

    $("#channels").niceScroll({
        cursorcolor: "#BDBDBD",
        background: "#f2f2f2",
        autohidemode: false,
        cursorwidth: "5px",
        railoffset: {left: 15},
        railpadding: { top: 0, right: 1, left: 0, bottom: 0 },
    });
});

$('.picture_cover').hover(function(e) {
    let description = $(e.target).attr('alt');
    let width = $(e.target).width();
    let height = $(e.target).height();
    $(e.target).before('<div class="picture_description" style="width: ' + width + 'px;' + 'height: ' + height + 'px;' + 'margin-bottom: -' + height + 'px;">' + description + '</div>');

});

$('.picture_cover').mouseout(function(e) { 
    $('.picture_description').remove();
});

$('.genre').hover(function(e) {
    $(e.target).css('opacity', '1');
});

$('.genre').mouseout(function(e) {
    $(e.target).css('opacity', '0.8');
});

$('#button_login').click(function() {
    $('#shadow').css('display', 'block');
    $('#modal').css('display', 'flex');
    $('html').css('height', '100vh');
    $('html').css('overflow', 'hidden');
});

$('#shadow').click(function() {
    $('#shadow').css('display', 'none');
    $('#modal').css('display', 'none');
    $('html').css('height', '');
    $('html').css('overflow', '');
});

$('#modal_inner-checkbox img').click(function() {
    $('.checkbox_no').toggleClass('checkbox_no-toggle');
    $('.checkbox_yes').toggleClass('checkbox_yes-toggle');
});

$('#modal_inner-button').click(function() {
    $('#shadow').css('display', 'none');
    $('#modal').css('display', 'none');

    let login = $('#modal_inner-login').val();
    
    $('#button_login').css('display', 'none');

    $('#login').val(login);
    
    $('#login').css('display', 'flex');
    $('#button_logout').css('display', 'flex');
    
    $('html').css('height', '');
    $('html').css('overflow', '');

    sessionStorage.setItem('login', login);
});

$('#button_logout').click(function() {
    let login = '';
    $('#login').val(login);
    $('#modal_inner-login').val(login);
    $('#login').css('display', 'none');
    $('#button_logout').css('display', 'none');
    $('#button_login').css('display', 'block');

    sessionStorage.setItem('login', '');
});

$('#login').click(function() {
    $('#login').removeClass('login_input');
});

$('#login').focusout(function() {
    $('#login').addClass('login_input');
    $('#modal_inner-login').val($('#login').val());

    let login = $('#modal_inner-login').val();
    sessionStorage.setItem('login', login);
});