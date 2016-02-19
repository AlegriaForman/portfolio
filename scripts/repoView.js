(function(module) {
  var repoView = {};
  repos.requestRepos(repoView.index);
  var ui = function() {
    var $skills = $('#skills');

    $skills.find('ul').empty();
    $skills.show().siblings().hide();
  };

  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '" target="_blank"> '+ repo.name + '</a>');
  };

  repoView.index = function(ctx,next) {
    ui();
    $('#skills ul').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
