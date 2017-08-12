angular.
  module('myApp.core', ['ngResource']).
  factory('Contact', ['$resource',
    function($resource) {
      return $resource('http://localhost/api/contacts/:contactId', {}, {
        query: {
          method: 'GET',
          isArray: true
        },
        favorite: {
          url: 'http://localhost/api/contacts/favorite/:id',
          method: 'PUT',
          params: {id: 'id'}
        }
         

      });
    }
  ]);