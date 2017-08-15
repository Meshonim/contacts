(function(){
    'use strict';

    angular
    .module('contactApp')
    .component('dobInput', {
    templateUrl: 'components/dob-input/dob-input.template.html',
    controller: DobInputController,
    bindings: {
        dob: '='
    }
});

function DobInputController () {
        var self = this;
        self.date = new Date();
    }

})();