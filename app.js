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
  $newprojectData.find('p.date').html(this.date);
  $newprojectData.find('img.project').attr('src', this.img);
  $newprojectData.find('a.link').attr('href', this.link);
  $newprojectData.find('a').html('Check out this site');
  $newprojectData.find('p.description').html(this.description);
  $newprojectData.find('p.contributors').html(this.contributors);
  return $newprojectData;
};

allProjects.forEach(function(somethingDifferent){
  console.log(somethingDifferent);
  $('.projects').append(somethingDifferent.toHtml());
});

// allProjects.handleMainNav = function () {
  $('.main-nav').on('click', '.nav', function(){
    $('.nav-content').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  })
// }

// allProjects.handleMainNav();
