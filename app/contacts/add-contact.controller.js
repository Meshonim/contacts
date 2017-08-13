(function() {
    'use strict';

    angular
        .module('myApp.contacts')
        .controller('AddContactController', controller)

    controller.$inject = ['Contact', '$scope', '$state', '$filter'];

    function controller(Contact, $scope, $state, $filter) {
            var vm = this;
            $scope.contact = {};
            $scope.add = function ()
            {
                if (vm.contactForm.$invalid)
                    {
                        alert ("Error: form is not valid");
                        return;
                    }
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
                    $state.go("home");
            });
                //    console.log($scope.contact);
               // console.log($scope.contact);
            }

            
    }
})();