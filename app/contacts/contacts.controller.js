(function() {
    'use strict';

    angular
        .module('myApp.contacts', ['ui.router', 'blockUI'])
        .controller('ContactListController', controller)

    controller.$inject = ['$scope', 'Contact', '$q'];

    function controller($scope, Contact, $q) {
        loadContacts($scope, Contact);
        $scope.changeStatus = function(id, isFavorite) {
            Contact.updateFavoriteStatus(id, isFavorite);
        }
        $scope.check = function(isChecked) {
            if (isChecked)
                $scope.checkedNumber++;
            else
                $scope.checkedNumber--;
        }
        $scope.remove = function() {
            var promises = [];
            angular.forEach($scope.contacts, function(contact) {
                if (contact.isChecked) {
                    promises.push(Contact.delete(contact.id));
                }

            });
            $q.all(promises).then(function(results) {
                loadContacts($scope, Contact);
            });

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
        Contact.getAll().then(function(result) {
            scope.contacts = result;
            angular.forEach(result, function(contact) {
                contact.isFavorite = (contact.isFavorite === "1");
                contact.isChecked = false;
            });
        });
    }
})();