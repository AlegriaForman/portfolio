var planets = [];

function Planet (opts) {
  this.name = opts.name;
  this.image = opts.image;
  this.quote = opts.quote;
}

Planet.prototype.toHTML = function () {
  var template = Handlebars.compile($('#planet-template').text());
  return template(this);
};

planetData.forEach(function(ele) {
  planets.push(new Planet(ele));
});

planets.forEach(function (a) {
  $('#planet-div').append(a.toHTML());
});
