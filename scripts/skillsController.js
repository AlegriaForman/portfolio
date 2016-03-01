(function(module) {
  var skillsController = {};

  skillsController.index = function() {
    Pics.fetchSkillsPics(contentView.initPortfolio);
    $('#skills-div').empty();
    $('main').children().hide();
    $('#skills').show();
    $('#skills-div').show();
  };

  module.skillsController = skillsController;
})(window);
