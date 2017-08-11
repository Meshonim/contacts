(function() {
    'use strict';

    angular
        .module('myApp.contacts', [])
        .controller('ContactListController', controller)

    controller.$inject = ['$scope', 'Contact'];

    function controller($scope, Contact) {
        $scope.contacts = Contact.query();
    }
})();