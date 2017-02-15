$('.switch button').on('click', function() {
  $(this).toggleClass('on off');
  if ($(this).attr('class') === "on") {

    // $(this).removeClass('on');
    // $(this).addClass('off');
    $('.status').text('Hey, who turned off the lights?');
    $('body').attr('class', 'dark');
  } else {
    // $(this).removeClass('off');
    // $(this).addClass('on');
    $('.status').text('It\'s so bright in here!');
    $('body').attr('class', 'light');
  }
});
