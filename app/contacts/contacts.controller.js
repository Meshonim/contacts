(function() {
    'use strict';

    angular
        .module('myApp.contacts', ['ui.router', 'blockUI'])
        .constant('NUMBER_EQUIVALENT_OF_TRUE', '1')
        .controller('ContactListController', controller);

    controller.$inject = ['NUMBER_EQUIVALENT_OF_TRUE', '$scope', 'Contact', '$q'];

    function controller(NUMBER_EQUIVALENT_OF_TRUE, $scope, Contact, $q) {
        loadContacts($scope, Contact);

        $scope.changeStatus = function(id, isFavorite) {
            Contact.updateFavoriteStatus(id, isFavorite)
            .catch(function () {
                alert("Error: can't change object status");
            })
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
                    promises.push(Contact.remove(contact.id));
                }

            });
            $q.all(promises)
            .catch(function() {
                alert("Error: checked object(s) can't be deleted");
            })
            .finally(function() {
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
        function loadContacts() {
        $scope.checkedNumber = 0;
        Contact.getAll().then(function(result) {
            $scope.contacts = result;
            angular.forEach(result, function(contact) {
                contact.isFavorite = 
                (contact.isFavorite === NUMBER_EQUIVALENT_OF_TRUE);
                contact.isChecked = false;
            });
        });
    }
    }

    
})();