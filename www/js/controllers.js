angular.module('mytribe.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('IdeaIndexCtrl', function($scope, IdeaService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.ideas = IdeaService.all();
})

// A simple controller that shows a tapped item's data
.controller('IdeaDetailCtrl', function($scope, $stateParams, IdeaService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.idea = IdeaService.get($stateParams.ideaId);
})

.controller('EventIndexCtrl', function($scope, EventService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.events = EventService.all();
})

.controller('MemberIndexCtrl', function($scope, MemberService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.members = MemberService.all();
});