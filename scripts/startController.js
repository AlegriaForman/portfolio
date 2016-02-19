(function(module) {
  var startController = {};

  startController.index = function(ctx, next) {
    $('main').children().hide();
  };

  module.startController = startController;
})(window);
