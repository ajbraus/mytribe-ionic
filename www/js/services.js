angular.module('mytribe.services', [])

//TO CONNECT TO SERVER
// .factory('Idea', function ($resource, HOST) {
//   return $resource(HOST + '/ideas/:id', { id: '@id' })
// })


.factory('IdeaService', function() {
  var ideas = [
    { id: 0, title: 'Facebook for Pandas', description: 'Kuz Panda\'s got relationships too' },
    { id: 1, title: 'A non profit for golfers', description: 'Don\'t hate the players, hate the game' },
    { id: 2, title: 'A non profit for golfers', description: 'Don\'t hate the players, hate the game' },
    { id: 3, title: 'A non profit for golfers', description: 'Don\'t hate the players, hate the game' },
    { id: 4, title: 'A non profit for golfers', description: 'Don\'t hate the players, hate the game' },
  ];

  return {
    all: function() {
      return ideas;
    },
    get: function(ideaId) {
      // Simple index lookup
      return ideas[ideaId];
    }
  }
})

.factory('TribeService', function() {
  var tribes = [
    { id: 0, name: '100state', members_count: "100", pic_url:"img/100state.jpeg" },
    { id: 1, name: 'Sector67', members_count: "100", pic_url:"img/sector67.png" }
  ];

  return {
    all: function() {
      return tribes;
    },
    get: function(tribeId) {
      // Simple index lookup
      return tribes[tribeId];
    }
  }
})

.factory('EventService', function() {
  var events = [
    { id: 0, title: 'Open House', starts_at: '9:00 AM - 10:00 AM', location: 'MGE Innovation Center', description: 'talk & meet new people' },
    { id: 1, title: 'Brainstorm', starts_at: '11:00 AM - 1:30 PM', location: 'MGE Innovation Center', description: 'time to let ideas to fly!'},
    { id: 2, title: 'Fun time!', starts_at: '2:00 PM - 4:00 PM', location: 'MGE Innovation Center', description: ' enjoy recreational activities' }
  ];

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      // Simple index lookup
      return events[eventId];
    }
  }
})

.factory('MemberService', function() {
  var members = [
    { id: 0, name: 'Joe James', interests: 'Karate, Javascript.', pic_url: "http://justinjackson.ca/wp-content/uploads/2008/08/justin-jackson-black-and-white-canada-profile.jpg" },
    { id: 1, name: 'Jane Michaelsen', interests: 'Nuclear Reactors, Skiing.', pic_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPLEctq-zq1C0VGOFfdihfSi-ZUFHVTrC6KFTqvXscEnh0rP-_PQ" },
    { id: 2, name: 'Will Han', interests: 'Reading, Business Marketing.', pic_url: "http://www.cbreclarion.com/aboutus/professionals/PublishingImages/Nelson%20Wong_46%20+Retouched%20A.jpg" },
    { id: 3, name: 'Eric Carter', interests: 'Corporate Acquisitions, Media Relations.', pic_url: "http://www.glistsociety.com/wp-content/uploads/2012/12/FB-Profile-Pic-2012-4.jpg" },
    { id: 4, name: 'James Telitiff', interests: 'Films, Scubadiving.', pic_url: "http://www.agileguidance.com/wp-content/uploads/2013/04/PaulHeidema-Profile2013-Modified3-Square.png" },
    { id: 5, name: 'Brad Cohen', interests: 'Hiking, Psychology.', pic_url: "http://simplybeautystudio.files.wordpress.com/2013/01/brad-profile-square.jpg" },
    { id: 6, name: 'Jack Donnelly', interests: 'Astrophysics, Stamp Collecting.', pic_url: "http://physics.anu.edu.au/square_profile_image.php/342/400" },
    { id: 7, name: 'Alison Proctor', interests: 'Clean Water Restoration, Chess.', pic_url: "http://textilesocietyofamerica.org/wp-content/uploads/2014/01/Maleyne_headshot_square-300x300.jpg" },
    { id: 8, name: 'Jessica Taft', interests: 'College Consulting, Camping.', pic_url: "http://www.pompo.com/wp-content/uploads/2010/03/Shermel3.jpg" },
    { id: 9, name: 'Sam Watson', interests: 'Marketing, Model Trains.', pic_url: "http://www.alt-asset.com/wp-content/uploads/2011/01/Sam-Zakhem-Headshot-Square.jpg" },
    { id: 10, name: 'Karen Smith', interests: 'Cryptologist, Woodworking.', pic_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkRDaz_9H5Gzkm0yhC6taCN0mFZccbib3Ajui8_8TbBVYzg3L8" }
  ];

  return {
    all: function() {
      return members;
    },
    get: function(ideaId) {
      // Simple index lookup
      return members[ideaId];
    }
  }
});
