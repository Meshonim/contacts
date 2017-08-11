(function() {
    'use strict';

    angular
        .module('myApp.contacts')
        .controller('ContactDetailsController', controller)

    controller.$inject = ['$scope', 'Contact', '$stateParams'];

    function controller($scope, Contact, $stateParams) {

        if ($stateParams.contactId != "")
            Contact.query({
                contactId: $stateParams.contactId
            }, function(contact) {
                console.log(contact[0]);
                $scope.contact = contact[0];
                var date = $scope.contact.dob.split('.');
                $scope.contact.dob = new Date(date[2], date[1] - 1, date[0]);
                
            });
    }
})();