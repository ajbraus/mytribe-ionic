// Ionic mytribe App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'mytribe' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'mytribe.services' is found in services.js
// 'mytribe.controllers' is found in controllers.js
angular.module('mytribe', ['ionic', 'mytribe.services', 'mytribe.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the idea tab has its own child nav-view and history
    .state('tab.ideas', {
      url: '/ideas',
      views: {
        'ideas-tab': {
          templateUrl: 'templates/idea-index.html',
          controller: 'IdeaIndexCtrl'
        }
      }
    })

    .state('tab.idea-detail', {
      url: '/idea/:ideaId',
      views: {
        'ideas-tab': {
          templateUrl: 'templates/idea-detail.html',
          controller: 'IdeaDetailCtrl'
        }
      }
    })

    .state('tab.events', {
      url: '/events',
      views: {
        'events-tab': {
          templateUrl: 'templates/event-index.html',
          controller: 'EventIndexCtrl'
        }
      }
    })

    .state('tab.members', {
      url: '/members',
      views: {
        'members-tab': {
          templateUrl: 'templates/member-index.html',
          controller: 'MemberIndexCtrl'
        }
      }
    })

    .state('side-menu', {
      url: '/side-menu',
      templateUrl: 'templates/side-menu.html'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/ideas');

});

