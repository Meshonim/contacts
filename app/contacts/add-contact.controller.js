(function() {
    'use strict';

    angular
        .module('myApp.contacts')
        .controller('AddContactController', controller)

    controller.$inject = ['Contact', '$scope', '$state', '$filter', 'blockUI'];

    function controller(Contact, $scope, $state, $filter, blockUI) {
            var vm = this;
            $scope.contact = {};
            $scope.add = function ()
            {
                if (vm.contactForm.$invalid)
                    {
                        alert ("Error: form is not valid");
                        return;
                    }
                blockUI.start();
                Contact.insert($scope.contact)
                .catch(function() {
                    alert("Error: can't add object");
                })
                .finally(function(result) {
                    blockUI.stop();
                    $state.go("home");
            });
            }

            
    }
})();