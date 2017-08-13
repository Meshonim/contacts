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
                Contact.insert({},
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