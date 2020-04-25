$(document).ready(function() {
    let login = sessionStorage.getItem('login');
    if (login !== '') {
        $('#button_login').css('display', 'none');

        $('#login').css('display', 'block');
        $('#button_logout').css('display', 'block');

        $('#login').val(login);
        $('#modal_inner-login').val(login);
    }
});

$('#logo').click(function() {
    location.reload();
});

$('#button_login').click(function() {
    $('#fade').css('display', 'block');
    $('#modal').css('display', 'block');
});

$('#films').click(function() {
    $("#films").css('color','#E5261E');
    $("#films").css('border-bottom','2px solid #E5261E');
    $("#channels").css('color','#333333');
    $("#channels").css('border-bottom','0');

    $("#new").css('display','block');
    $("#genres").css('display','block');
    $("#programs").css('display','none');
    
    $("html").css('height','1114px');
    $("body").css('height','1144px');

    $("footer").css('top','1024px');
});

$('#channels').click(function() {
    $("#films").css('color','#333333');
    $("#films").css('border-bottom','0');
    $("#channels").css('color','#E5261E');
    $("#channels").css('border-bottom','2px solid #E5261E');

    $("#new").css('display','none');
    $("#genres").css('display','none');
    $("#programs").css('display','block');
    
    $("html").css('height','1073px');
    $("body").css('height','1073px');

    $("footer").css('top','953px');
});

$('.genre').hover(function(e) {
    $(e.target).css('opacity','1');
});

$('.genre').mouseout(function(e) {
    $(e.target).css('opacity','0.8');
});

$('#modal_inner-checkbox img').click(function() {
    $('.checkbox_no').toggleClass('checkbox_no-toggle');
    $('.checkbox_yes').toggleClass('checkbox_yes-toggle');
});

$('#fade').click(function() {
    $('#fade').css('display', 'none');
    $('#modal').css('display', 'none');
});

$('#modal_inner-button').click(function() {
    $('#fade').css('display', 'none');
    $('#modal').css('display', 'none');

    let login = $('#modal_inner-login').val();
    
    $('#button_login').css('display', 'none');

    $('#login').val(login);
    
    $('#login').css('display', 'block');
    $('#button_logout').css('display', 'block');

    sessionStorage.setItem('login', login);
});

$('#button_logout').click(function() {
    // let login = '';
    // $('#login').val(login);
    // $('#modal_inner-login').val(login);
    $('#login').css('display', 'none');
    $('#button_logout').css('display', 'none');
    $('#button_login').css('display', 'block');
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

$('#new div').hover(function(e) {
    $(e.target).parent(e.target).children('img').css('display', 'block');
    $(e.target).parent(e.target).children('div').css('display', 'block');
});

$('#new div').mouseout(function(e) {
    $('.shadow').css('display', 'none');
    $('.description').css('display', 'none');
});