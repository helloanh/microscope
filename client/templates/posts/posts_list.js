var postsData = [ {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
}, {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
}, {

    title: 'Yo This is My Post',
    url: 'randomexampleurl.com'
}

];

Template.postsList.helpers({
  posts: postsData
});