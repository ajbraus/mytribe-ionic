// Ionic mytribe App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'mytribe' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'mytribe.services' is found in services.js
// 'mytribe.controllers' is found in controllers.js
angular.module('mytribe', ['ionic', 'ngResource', 'mytribe.services', 'mytribe.controllers'])

.constant('HOST', 'http://localhost:1337') //DEV
// .constant('HOST', 'https://www.mytri.be') //PRODUCTION

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    // setup an abstract state for the tabs directive

    .state('login', {
      url: '/',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

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

    .state('tab.idea-new', {
      url: '/ideas/new',
      views: {
        'ideas-tab': {
          templateUrl: 'templates/idea-new.html',
          controller: 'NewIdeaCtrl'
        }
      }
    })

    .state('idea-detail', {
      url: '/ideas/:ideaId',
      templateUrl: 'templates/idea-detail.html',
      controller: 'IdeaDetailCtrl'
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

    .state('event-detail', {
      url: '/events/:eventId',
      templateUrl: 'templates/event-detail.html',
      controller: 'EventDetailCtrl'
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

    .state('member-detail', {
      url: '/members/:memberId',
      templateUrl: 'templates/member-detail.html',
      controller: 'MemberDetailCtrl'
    })

    .state('side-menu', {
      url: '/side-menu',
      templateUrl: 'templates/side-menu.html',
      controller: 'SideMenuCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/ideas');

});

