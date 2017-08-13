(function() {
    'use strict';

    angular
        .module('myApp.contacts')
        .controller('AddContactController', controller)

    controller.$inject = ['$scope'];

    function controller($scope) {
            $scope.add = function ()
            {
                console.log(contactForm);
                console.log($scope.contact.dob);
            }
            
    }
})();