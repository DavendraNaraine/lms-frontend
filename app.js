var app = angular.module('lmsApp', ['ui.router'])
.config(function($stateProvider) {
  var bookState = {
    name: 'books',
    url: '/books',
    templateUrl: 'books.html',
		controller: "booksController"
  }

  $stateProvider.state(bookState);
});