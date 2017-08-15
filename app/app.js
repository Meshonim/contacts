'use strict';

// Declare app level module which depends on views, and components
angular.module('contactApp', [
  'contactApp.contacts',
  'contactApp.core',
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'blockUI'
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider, blockUIConfig) {
  blockUIConfig.autoInjectBodyBlock = false;
  blockUIConfig.blockBrowserNavigation = true;
  blockUIConfig.message = 'Please wait for operation';
 
  $stateProvider.state('home', { 
    url: '/home',
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactListController'
  }).state('favorite', { 
    url: '/favorite',
    templateUrl: 'contacts/favorite.html',
    controller: 'FavoriteListController'
  }).state('editContact', { 
    url: '/editContact/:contactId',
    component: 'dobInput',
    templateUrl: 'contacts/edit-contact.html',
    controller: 'EditContactController',
    controllerAs: 'edit'
  }).state('addContact', { 
    url: '/addContact',
    templateUrl: 'contacts/add-contact.html',
    controller: 'AddContactController',
    controllerAs: 'addCtrl'
  });
   $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
});

