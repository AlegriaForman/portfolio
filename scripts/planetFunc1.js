var aboutArr = [];
var skillsArr = [];
var contactArr = [];

function Pics (opts) {
  this.name = opts.name;
  this.image = opts.image;
}

Pics.prototype.aboutPics = function () {
  var template = Handlebars.compile($('#about-template').text());
  return template(this);
};

Pics.prototype.skillsPics = function () {
  var template = Handlebars.compile($('#skills-template').text());
  return template(this);
};

Pics.prototype.contactPics = function () {
  var template = Handlebars.compile($('#contact-template').text());
  return template(this);
};

aboutData.forEach(function(ele) {
  aboutArr.push(new Pics(ele));
});

aboutArr.forEach(function (a) {
  $('#about-div').append(a.aboutPics());
});

skillsData.forEach(function(ele) {
  skillsArr.push(new Pics(ele));
});

skillsArr.forEach(function (a) {
  $('#skills-div').append(a.skillsPics());
});

contactData.forEach(function(ele) {
  contactArr.push(new Pics(ele));
});

contactArr.forEach(function (a) {
  $('#contact-div').append(a.contactPics());
});
