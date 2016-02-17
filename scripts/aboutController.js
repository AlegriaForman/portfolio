(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('main').children().hide();
    $('#about').show();
    $('#about-div').show();
  };

  module.aboutController = aboutController;
})(window);
