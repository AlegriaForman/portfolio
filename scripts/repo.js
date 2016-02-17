(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/AlegriaForman/repos?per_page=4&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(data, message, xhr) {
        repos.all = data;
        repos.all = [];
        data.forEach(function(ele) {
          repos.all.push(ele);
        });
      }
    }).done(function() {
      if(callback) callback();
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };
  module.repos = repos;
})(window);
