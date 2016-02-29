(function(module){
  contentView = {};
  contentView.initPortfolio = function(){
    Pics.skillsPicture.forEach(function(a){
      $('#skills-div').append(a.skillsPics());
    });
  };

})(window);
