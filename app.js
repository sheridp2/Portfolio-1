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

projectData.forEach(function(object){
  allProjects.push(new Project(object));
});

Project.prototype.toHtml = function(){
  var $newprojectData = $('div.template').clone();
  $newprojectData.removeClass('template');
  $newprojectData.addClass('');
  $newprojectData.find('div.title').html(this.title);
  $newprojectData.find('a').attr('href', this.link);
  // $newprojectData.find('a').html('Here is a link!');
  $newprojectData.find('img').attr('src', this.img);
  $newprojectData.find('p').html(this.description);
  return $newprojectData;
};

allProjects.forEach(function(object){
  console.log(object);
  $('.projects').append(object.toHtml());
});
