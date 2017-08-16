(function() {
    'use strict';

    angular
        .module('contactApp')
        .component('contactForm', {
            templateUrl: 'components/contact-form/contact-form.template.html',
            controller: ContactFormController,
            bindings: {
                contactForm: '=',
                contact: '<',
                action: '&'
            }
        });

    function ContactFormController() {
        var self = this;
    }

})();