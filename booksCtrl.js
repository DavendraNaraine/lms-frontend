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
	
// 	$scope.getReturnBooks = function() {
// 		$http({
// 			"url": "/lms-backend/index.php/v1/books/return",
// 			"method": "GET",
// 		}).then(function(success_response) {
// 			$scope.books = success_response.data
// 		}, function(error_response) {
// 			console.error(error_response);
// 		}).finally(function() {
// 			console.log("Done loading returns");
// 		})
// 	}

	$scope.getTitles = function() {
		$http({
			"url": "/lms-backend/index.php/v1/titles",
			"method": "GET",
		}).then(function(success_response) {
			$scope.titles = success_response.data
		}, function(error_response) {
			console.error(error_response);
		}).finally(function() {
			console.log("Done");
		})
	}

	$scope.getBooks();
	$scope.getTitles();
// 	$scope.getReturnBooks();

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

	$scope.borrow_book = function(book) {
		$http({
			url: "/lms-backend/index.php/v1/books/borrow",
			method: "POST",
			data: {
				book_id: book.book_id,
				student_usi: book.student_usi,
				borrowed_date: book.borrowed_date,
				borrowed_condition_id: book.condition_id,
				return_date: book.return_date
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