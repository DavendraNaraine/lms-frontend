var app = angular.module('lmsApp', ['ui.router'])
.config(function($stateProvider) {
  var bookState = {
    name: 'books',
    url: '/books',
    templateUrl: 'books.html',
		controller: "booksController"
  }

   var titleState = {
    name: 'titles',
    url: '/titles',
    templateUrl: 'titles.html',
		controller: "titlesController"
  }
   
  $stateProvider.state(bookState);
  $stateProvider.state(titleState);
});