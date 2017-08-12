angular.
  module('myApp.core', ['ngResource']).
  factory('Contact', ['$resource',
    function($resource) {
      return $resource('http://localhost/api/contacts/:id', {id: ''}, {
        query: {
          method: 'GET',
          isArray: true
        },
        favorite: {
          url: 'http://localhost/api/contacts/:id/favorite',
          method: 'PUT'
        },
        delete: {
          method: 'DELETE'
        } 

      });
    }
  ]);