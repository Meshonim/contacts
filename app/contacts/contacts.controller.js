(function() {
    'use strict';

    angular
        .module('myApp.contacts', [])
        .controller('ContactListController', controller)

    controller.$inject = ['$scope', 'Contact'];

    function controller($scope, Contact) {
        $scope.contacts = Contact.query();
        $scope.contacts.$promise.then(function(result) {
            $scope.contacts = result;
            angular.forEach(result, function(contact) {
                contact.isFavorite = (contact.isFavorite === "1");
            });
        });
        $scope.changeStatus = function(id, isFavorite) {
            Contact.favorite({
                id: id
            }, {
                status: isFavorite
            });
        }
        $scope.criteriaMatch = function(criteria) {
            return function(contact) {
                if (criteria === undefined)
                    return true;
                if (criteria.length < 2)
                    return true;
                var name = contact.first+" "+contact.last;
                return name.match(new RegExp(criteria, 'i'));
            }
        };

    }
})();