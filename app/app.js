'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.contacts',
  'myApp.favorite',
  'myApp.version',
  'myApp.core',
  'ui.router',
  'ngResource',
  'ui.bootstrap'
]).
config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
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
    controller: 'EditContactController'
  }).state('addContact', { 
    url: '/addContact',
    templateUrl: 'contacts/add-contact.html',
    controller: 'AddContactController'
  });
}).run(function($state) {
  $state.go('home'); 
});

