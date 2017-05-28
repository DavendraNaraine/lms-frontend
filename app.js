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

	var userState = {
		name: 'users',
		url: '/users',
		templateUrl: 'users.html',
		controller: "usersController"
	}

	var subjectState = {
		name: 'subjects',
		url: '/subjects',
		templateUrl: 'subjects.html',
		controller: "subjectsController"
	}

	var returnState = {
		name: 'returns',
		url: '/returns',
		templateUrl: 'returns.html',
		controller: "returnsController"
	}

	$stateProvider.state(bookState);
	$stateProvider.state(titleState);
	$stateProvider.state(userState);
	$stateProvider.state(subjectState);
	$stateProvider.state(returnState);

});