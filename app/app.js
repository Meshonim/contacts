'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.contacts',
  'myApp.favorite',
  'myApp.version',
  'ui.router'
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
  });
}).run(function($state) {
  $state.go('home'); 
});

