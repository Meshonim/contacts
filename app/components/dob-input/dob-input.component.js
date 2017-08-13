

(function(){
    'use strict';

    angular
    .module('myApp')
    .component('dobInput', {
    templateUrl: 'components/dob-input/dob-input.template.html',
    controller: function () {
        var self = this;
        self.date = new Date();
    },
    bindings: {
        dob: '='
    }
});

})();