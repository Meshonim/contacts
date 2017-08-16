angular.
module('contactApp')
.factory('Contact', ['$filter', '$resource',
    function($filter, $resource) {
        var resource = $resource('http://localhost/api/contacts/:id', {
            id: ''
        }, {
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
        var service = {
            insert: insert,
            get: get,
            getAll: getAll,
            update: update,
            updateFavoriteStatus: updateFavoriteStatus,
            remove: remove
        };

        return service;

        function insert(contact) {
            return resource.insert({}, {
                first: contact.first,
                last: contact.last,
                dob: $filter('date')(contact.dob, "yyyy-MM-dd"),
                phone: contact.phone,
                gender: contact.gender,
                rel: contact.rel,
                des: contact.des
            }).$promise;
        }

        function get(id) {
            return resource.get({
                id: id
            }).$promise;
        }

        function getAll() {
            return resource.getAll().$promise;
        }

        function update(contact) {
            return resource.update({
                id: contact.id
            }, {
                first: contact.first,
                last: contact.last,
                dob: $filter('date')(contact.dob, "yyyy-MM-dd"),
                phone: contact.phone,
                gender: contact.gender,
                rel: contact.rel,
                des: contact.des
            }).$promise;
        }

        function remove(id) {
            return resource.remove({
                id: id
            }).$promise;
        }

        function updateFavoriteStatus(id, status) {
            return resource.updateFavoriteStatus({
                id: id
            }, {
                status: status
            }).$promise;
        }
    }
]);