(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('main').children().hide();
    $('#contact').show();
    $('#contact-div').show();
  };

  module.contactController = contactController;
})(window);
