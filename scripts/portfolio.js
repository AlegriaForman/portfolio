(function(module){
  contentView = {};

  contentView.initPortfolio = function(){
    $('.tab').on('click', function() {
      //e.preventDefault();
      var value = $(this).text();
      console.log($(this).text());
      Portfolio.all.forEach(function(a) {
        if(value == a.name) {
          console.log(a.name);
          $('#portfolioInformation').append(Portfolio.all);
          console.log(Portfolio.all);
          }
        });
    });
  };
module.contentView = contentView;
})(window);
