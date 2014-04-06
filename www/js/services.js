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
    { id: 0, name: 'Joe Blow', interests: 'Karate, javascript.', pic_url: "http://justinjackson.ca/wp-content/uploads/2008/08/justin-jackson-black-and-white-canada-profile.jpg" },
    { id: 1, name: 'Jane Doe', interests: 'nuclear reactors, boogerbrains.', pic_url: "http://justinjackson.ca/wp-content/uploads/2008/08/justin-jackson-black-and-white-canada-profile.jpg" }
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
