if (Posts.find().count() === 0 ) {
	Posts.insert({
		title: 'Intro to Telescope',
		url: 'http://sachagreif.com/introducing-telescope/'
	});

	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com'
	});

	Posts.insert({
		title: 'my site',
		url: 'http://anhkim.me'
	});
}