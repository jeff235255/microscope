var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    domain: ''
  }, 
  {
    title: 'Meteor',
    url: 'http://meteor.com',
    domain: ''
  }, 
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    domain: ''
  }
];
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});