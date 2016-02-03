$('#skills').hide();

$('#my-skills').on ('click', function() {
$('#skills').slideToggle();
});

$('#contact').hide();

$('#my-contact').on ('click', function() {
$('#contact').slideToggle();
});

$('li').hover(function() {
  $(this).fadeOut(100);
  $(this).fadeIn(300);
});
