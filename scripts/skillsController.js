(function(module) {
  var skillsController = {};

  skillsController.index = function(ctx, next) {
    Pics.fetchSkillsPics(ctx.skills);
    $('#skills-div').empty();
    $('main').children().hide();
    $('#skills').show();
    $('#skills-div').show();
  };

  module.skillsController = skillsController;
})(window);
