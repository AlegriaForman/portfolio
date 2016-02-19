(function(module) {
  var contactController = {};

  contactController.index = function(ctx, next) {
    $('main').children().hide();
    $('#contact').show();
    $('#contact-div').show();
  };

  module.contactController = contactController;
})(window);
