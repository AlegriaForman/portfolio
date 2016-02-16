(function(module){

  function Portfolio (opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

  Portfolio.all = [];

  Portfolio.prototype.myPortfolio = function () {
    var template = Handlebars.compile($('#portfolio-template').text());
      return template(this);
  };

  Portfolio.loadAll  = function(rawData) {
    Portfolio.all  = rawData.map(function(ele) {
      return new Portfolio(ele);
    });
  };

  Portfolio.getPortfolioInfo = function(){
  $.getJSON('/scripts/portfolioInfo.json', function(data){
    localStorage.rawData = JSON.stringify(data);
    Portfolio.loadAll(data);
    contentView.initPortfolio();
  });
};

Portfolio.fetchPortfolioInfo = function(){
  if (localStorage.rawData) {
    $.ajax ({
      url: '/scripts/portfolioInfo.json',
      type: 'HEAD',
      success: function(data, message, xhr){
        console.log(xhr);
        var eTag = xhr.getResponseHeader('eTag');{
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          localStorage.clear();
        } else {}
          Portfolio.loadAll(JSON.parse(localStorage.rawData));
          contentView.initPortfolio();
        }
      }
    });
} else {
  Portfolio.getPortfolioInfo();
}
};

module.Portfolio = Portfolio;
})(window);
