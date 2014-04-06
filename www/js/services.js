angular.module('mytribe.services', [])

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
    { id: 0, title: 'Open House', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Brainstorm', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Fun time!', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
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
