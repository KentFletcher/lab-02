'use strict';

//Using AJAX to fetch the monsters
$.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON'})
  .then ( (data) => {
    data.forEach(value => {
      new Monster(value).render();
    });
  });

//constructor function for our monsters
function Monster (data) {
  this.image_url = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
}

//Render function for the monsters
Monster.prototype.render = function() {
  let template = $('#photo-template').html();

  let newSection = $('<section></section>');
  newSection.html(template);
  newSection.find('img').attr('src', this.image_url);
  newSection.find('h2').text(this.title);
  newSection.find('p').text(this.description);
  newSection.attr('keyword', this.keyword);
  newSection.attr('horns', this.horns);

  $('main').append(newSection);

};




