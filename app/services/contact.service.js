angular.
  module('myApp.core', ['ngResource']).
  factory('Contact', ['$filter', '$resource',
    function($filter, $resource) {
      var resource = $resource('http://localhost/api/contacts/:id', {id: ''}, {
        getAll: {
          method: 'GET',
          isArray: true
        },
        get: {
          method: 'GET'
        },
        insert: {
          method: 'POST'
        },
        update: {
          method: 'PUT'
        },
        delete: {
          method: 'DELETE'
        },
        updateFavoriteStatus: {
          method: 'PATCH'
        }
      });
      return {
    insert: function (contact) {
        return resource.insert({},
                     {
                        first: contact.first,
                        last: contact.last,
                        dob: $filter('date')(contact.dob, "yyyy-MM-dd"),
                        phone: contact.phone,
                        gender: contact.gender,
                        rel: contact.rel,
                        des: contact.des
                     }).$promise;
    },
    get: function (id) {
        return resource.get({id: id}).$promise;
    },
    getAll: function () {
        return resource.getAll().$promise;
    },
    update: function (contact) {
        return resource.update(
                     {
                         id: contact.id
                     },
                     {
                        first: contact.first,
                        last: contact.last,
                        dob: $filter('date')(contact.dob, "yyyy-MM-dd"),
                        phone: contact.phone,
                        gender: contact.gender,
                        rel: contact.rel,
                        des: contact.des
                     }).$promise;
    },  
    delete: function (id) {
        return resource.delete({id: id}).$promise;
    },
    updateFavoriteStatus: function (id, status)
    {
        return resource.updateFavoriteStatus({id: id}, {status: status}).$promise;
    }
    }}]);