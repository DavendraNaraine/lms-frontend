angular.module('lmsApp', [])
  .controller('booksController', function($scope, $http) {
		$scope.addBook = function(book) {
			$scope.books.push(book);
		}
		
		$scope.getBooks = function() {
			$http({
				"url": "/librarymanagementsystem/index.php/v1/books",
				"method": "GET",
			}).then(function(success_response) {
				$scope.books = success_response.data
			}, function(error_response) {
				console.error(error_response);
			}).finally(function() {
				console.log("Done");
			})
		}
		
		$scope.getBooks();
  });