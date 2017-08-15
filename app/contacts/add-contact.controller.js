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
               // $scope.contact.dob = $filter('date')($scope.contact.dob, "yyyy-MM-dd")
                Contact.insert($scope.contact)
                .finally(function(result) {
                    blockUI.stop();
                    $state.go("home");
            });
            }

            
    }
})();