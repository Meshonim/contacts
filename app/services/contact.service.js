angular.
  module('myApp.core', ['ngResource']).
  factory('Contact', ['$resource',
    function($resource) {
      return $resource('http://localhost/api/contacts/:id', {id: ''}, {
        query: {
          method: 'GET',
          isArray: true
        },
        get: {
          method: 'GET'
        },
        insert: {
          method: 'POST'
        }, 
        delete: {
          method: 'DELETE'
        },
        favorite: {
          url: 'http://localhost/api/contacts/:id/favorite',
          method: 'PUT'
        }
      });
    }
  ]);