$('#about').hide();
$('#my-about').on('click', function() {
  $('#skills').hide();
  $('#contact').hide();
  $('#about').fadeIn();
});

$('#skills').hide();
$('#my-skills').on('click', function() {
  $('#about').hide();
  $('#contact').hide();
  $('#skills').fadeIn();
});

$('#contact').hide();
$('#my-contact').on('click', function() {
  $('#about').hide();
  $('#skills').hide();
  $('#contact').fadeIn();
});
