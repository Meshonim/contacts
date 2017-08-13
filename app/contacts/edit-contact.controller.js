(function() {
    'use strict';

    angular
        .module('myApp.contacts')
        .controller('EditContactController', controller)

    controller.$inject = ['$scope', 'Contact', '$stateParams', 'blockUI', '$filter', '$state'];

    function controller($scope, Contact, $stateParams, blockUI, $filter, $state) {
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
                blockUI.start();
                Contact.update(
                     {
                         id: $scope.contact.id
                     },
                     {
                        first: $scope.contact.first,
                        last: $scope.contact.last,
                        dob: $filter('date')($scope.contact.dob, "yyyy-MM-dd"),
                        phone: $scope.contact.phone,
                        gender: $scope.contact.gender,
                        rel: $scope.contact.rel,
                        des: $scope.contact.des
                     })
                .$promise.then(function(result) {
                    blockUI.stop();
                    $state.go("home");
            });
            }
    }
})();