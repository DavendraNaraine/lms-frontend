app.controller('booksController', function($scope, $http) {
	console.log("Books here");

	$scope.addBook = function(book) {
		$scope.books.push(book);
	}

	$scope.getBooks = function() {
		$http({
			"url": "/lms-backend/index.php/v1/books",
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


	$scope.edit_book = function(book) {
		$http({
			url: "/lms-backend/index.php/v1/books/" + book.book_id,
			method: "PATCH",
			data: {
				ug_id: book.ug_id,
				condition_id: book.condition_id
			}
		}).then(function(success) {
			console.log("Good");
		}, function(error) {
			console.error("Bad");
		}).finally(function() {
			$scope.getBooks();
		})
	}

	$scope.delete_book = function(book) {
		$http({
			url: "/lms-backend/index.php/v1/books/" + book.book_id,
			method: "DELETE",
		}).then(function(success) {
			console.log("Good");
		}, function(error) {
			console.error("Bad");
		}).finally(function() {
			$scope.getBooks();
		})
	}

	$scope.add_book = function(book) {
		$http({
			url: "/lms-backend/index.php/v1/books",
			method: "POST",
			data: {
				title_id: book.title_id,
				ug_id: book.ug_id,
				condition_id: book.condition_id
			}
		}).then(function(success) {
			console.log("Good");
		}, function(error) {
			console.error("Bad");
		}).finally(function() {
			$scope.getBooks();
		})
	}
	
	
	$scope.search_book = function(book) {
			$http({
				url: "/lms-backend/index.php/v1/books/search",
				method: "POST",
					data: {
						ug_id: book.ug_id,
						book_id: book.book_id,
				}
			}).then(function(success) {
					console.log("Good");
			}, function(error) {
					console.error("Bad");
			}).finally(function() {
					$scope.getBooks();

			})
		}
	
		
	$scope.getBook = function(book) {
		$http({
			"url": "/lms-backend/index.php/v1/books/" + book.book_id,
			"method": "GET",
		}).then(function(success_response) {
			$scope.books = success_response.data
			console.log("Error in success");
		}, function(error_response) {
			console.error(error_response);
			console.log("Error in fail");
		}).finally(function() {
			console.log("Done");
		})
	}


});