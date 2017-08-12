(function() {
    'use strict';

    angular
        .module('myApp.contacts', [])
        .controller('ContactListController', controller)

    controller.$inject = ['$scope', 'Contact', '$q'];

    function controller($scope, Contact, $q) {
        loadContacts($scope, Contact);
        $scope.changeStatus = function(id, isFavorite) {
            Contact.favorite({
                id: id
            }, {
                status: isFavorite
            });
        }
        $scope.check = function(isChecked) {
            if (isChecked)
                $scope.checkedNumber++;
            else
                $scope.checkedNumber--;
        }
        $scope.remove = function() {
            var promises = [];
            for (var i = $scope.contacts.length - 1; i >= 0; i--) {
                if ($scope.contacts[i].isChecked) {
                    promises.push(Contact.delete({
                        id: $scope.contacts[i].id
                    }).$promise);
                    $scope.contacts.splice(i, 1);
                }
            }
            $q.all(promises);
            $scope.checkedNumber = 0;
        }
        $scope.criteriaMatch = function(criteria) {
            return function(contact) {
                if (criteria === undefined)
                    return true;
                if (criteria.length < 2)
                    return true;
                var name = contact.first + " " + contact.last;
                return name.match(new RegExp(criteria, 'i'));
            }
        };
    }

    function loadContacts(scope, Contact) {
        scope.checkedNumber = 0;
        Contact.query().$promise.then(function(result) {
            scope.contacts = result;
            angular.forEach(result, function(contact) {
                contact.isFavorite = (contact.isFavorite === "1");
                contact.isChecked = false;
            });
        });
    }
})();