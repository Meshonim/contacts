(function(){
    'use strict';

    angular
    .module('contactApp')
    .component('contactPage', {
    templateUrl: 'components/contact-page/contact-page.template.html',
    controller: ContactPageController
});

function ContactPageController () {
        var self = this;
    }

})();