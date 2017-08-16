(function() {
    'use strict';

    angular
        .module('contactApp')
        .constant('NUMBER_EQUIVALENT_OF_TRUE', '1')
        .component('contactTable', {
            templateUrl: 'components/contact-table/contact-table.template.html',
            controller: ContactTableController,
            bindings: {
                criteria: '<'
            }

        });

    ContactTableController.$inject = ['NUMBER_EQUIVALENT_OF_TRUE', 'Contact', '$q'];

    function ContactTableController(NUMBER_EQUIVALENT_OF_TRUE, Contact, $q) {
        var self = this;
        loadContacts();

        self.changeStatus = function(id, isFavorite) {
            Contact.updateFavoriteStatus(id, isFavorite)
                .catch(function() {
                    alert("Error: can't change object status");
                })
        }

        self.check = function(isChecked) {
            if (isChecked)
                self.checkedNumber++;
            else
                self.checkedNumber--;
        }

        self.remove = function() {

            var promises = [];
            angular.forEach(self.contacts, function(contact) {
                if (contact.isChecked) {
                    promises.push(Contact.remove(contact.id));
                }

            });
            $q.all(promises)
                .catch(function() {
                    alert("Error: checked object(s) can't be deleted");
                })
                .finally(function() {
                    loadContacts();
                });
        }

        self.criteriaMatch = function(criteria) {
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
            self.checkedNumber = 0;
            Contact.getAll().then(function(result) {
                self.contacts = result;
                angular.forEach(result, function(contact) {
                    contact.isFavorite =
                        (contact.isFavorite === NUMBER_EQUIVALENT_OF_TRUE);
                    contact.isChecked = false;
                });
            });
        }
    }

})();