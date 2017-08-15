(function() {
    'use strict';

    angular
        .module('contactApp.contacts')
        .controller('EditContactController', controller)

    controller.$inject = ['$scope', 'Contact', '$stateParams', 'blockUI', '$filter', '$state'];

    function controller($scope, Contact, $stateParams, blockUI, $filter, $state) {
            var vm = this;
            Contact.get($stateParams.contactId)
            .then(function(contact) {           
                $scope.contact = contact;
                var date = $scope.contact.dob.split('-');
                $scope.contact.dob = new Date(date[0], date[1] - 1, date[2]);
                $scope.contact.phone = Number($scope.contact.phone);
            })
            .catch (function() {           
                alert("Error: can't get updating object");
                $state.go("home");
            });       
            $scope.update = function ()
            {
                if (vm.contactForm.$invalid)
                    {
                        alert ("Error: form is not valid");
                        return;
                    }
                blockUI.start();
                Contact.update($scope.contact)
                .catch(function() {
                    alert("Error: can't update object");
                })
                .finally(function() {
                    blockUI.stop();
                    $state.go("home")
                });
            }
    }
})();