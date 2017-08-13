(function() {
    'use strict';

    angular
        .module('myApp.contacts')
        .controller('EditContactController', controller)

    controller.$inject = ['$scope', 'Contact', '$stateParams'];

    function controller($scope, Contact, $stateParams) {
            var vm = this;
            Contact.get({
                id: $stateParams.contactId
            }).$promise.then(function(contact) {           
                $scope.contact = contact;
                var date = $scope.contact.dob.split('-');
                $scope.contact.dob = new Date(date[0], date[1] - 1, date[2]);
                $scope.contact.phone = Number($scope.contact.phone);
            });        
            $scope.update = function ()
            {
                if (vm.contactForm.$invalid)
                    {
                        alert ("Error: form is not valid");
                        return;
                    }
            }
           // vm.contactForm.$setDirty();
    }
})();