(function(module){
  contentView = {};

  contentView.initPortfolio = function(){
    Pics.skillsPicture.forEach(function(a){
        $('#skills-div').append(a.skillsPics());
    });
  };

  $('#about-div').hide();
  $('#skills-div').hide();
  $('#contact-div').hide();
  $('#about').hide();
  $('#skills').hide();
  $('#contact').hide();
  
  $('#my-about').on('click', function() {
    $('#skills').hide();
    $('#contact').hide();
    $('#about').fadeIn();
    $('#skills-div').hide();
    $('#contact-div').hide();
    $('#about-div').fadeIn();
  });

  $('#my-skills').on('click', function() {
    $('#about').hide();
    $('#contact').hide();
    $('#skills').fadeIn();
    $('#about-div').hide();
    $('#contact-div').hide();
    $('#skills-div').fadeIn();
  });

  $('#my-contact').on('click', function() {
    $('#about').hide();
    $('#skills').hide();
    $('#contact').fadeIn();
    $('#about-div').hide();
    $('#skills-div').hide();
    $('#contact-div').fadeIn();
  });
})(window);
