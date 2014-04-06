//TO CONNECT TO SERVER

angular.module('mytribe.services', [])

.factory('IdeaService', function ($resource, HOST) {
  return $resource(HOST + '/idea/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  })
})

.factory('UserService', function ($resource, HOST) {
  return $resource(HOST + '/user/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  })
})

.factory('EventService', function ($resource, HOST) {
  return $resource(HOST + '/event/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  })
});

