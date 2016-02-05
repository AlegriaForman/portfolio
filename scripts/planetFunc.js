var planets = [];

function Planet (list) {
  this.name = list.name;
  this.imageUrl = list.imageURL;
}

Planet.prototype.toHTML = function {
  var template = Handlebars.compile($('#planet-template').text());
  return template(this);
};

planetData.forEach(function(ele) {
  planets.push(new Planet(ele));
});
