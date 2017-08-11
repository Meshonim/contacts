angular.
  module('myApp.core', ['ngResource']).
  factory('Contact', ['$resource',
    function($resource) {
      return $resource('info/:contactId.json', {}, {
        query: {
          method: 'GET',
          params: {contactId: 'contacts'},
          isArray: true
        }
      });
    }
  ]);