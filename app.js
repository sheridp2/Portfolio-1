'use strict'

var allProjects =[];

function Project(argument){
  this.title = argument.title;
  this.description = argument.description;
  this.date = argument.date;
  this.contributors = argument.contributors;
  this.link = argument.link;
  this.img = argument.img;
}

Project.prototype.toHtml = function() {
  var source = $('#template').text();
  console.log('source' + source);
  var templateRender = Handlebars.compile(source);
  console.log('templaterender' + templateRender(this));

  return templateRender(this);
};



projectData.forEach(function(object){
  allProjects.push(new Project(object));
});


allProjects.forEach(function(somethingDifferent){
  console.log(somethingDifferent);
  $('.projects').append(somethingDifferent.toHtml());
});


  $('.nav-content').hide();
  $('.main-nav').on('click', '.nav', function(){
    $('.nav-content').hide();
    $('.home').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  })
