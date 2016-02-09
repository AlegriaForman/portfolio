/*contentView = {};

contentView.initPortfolio = function(){
  Pics.skillsPicture.forEach(function(a){
      $('#skills-div').append(a.skillsPics());
  });
};*/

$('#about-div').hide();
$('#skills-div').hide();
$('#contact-div').hide();

$('#about').hide();
$('#my-about').on('click', function() {
  $('#skills').hide();
  $('#contact').hide();
  $('#about').fadeIn();
  $('#skills-div').hide();
  $('#contact-div').hide();
  $('#about-div').fadeIn();
});

$('#skills').hide();
$('#my-skills').on('click', function() {
  $('#about').hide();
  $('#contact').hide();
  $('#skills').fadeIn();
  $('#about-div').hide();
  $('#contact-div').hide();
  $('#skills-div').fadeIn();
});

$('#contact').hide();
$('#my-contact').on('click', function() {
  $('#about').hide();
  $('#skills').hide();
  $('#contact').fadeIn();
  $('#about-div').hide();
  $('#skills-div').hide();
  $('#contact-div').fadeIn();
});
