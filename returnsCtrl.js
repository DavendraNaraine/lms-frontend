app.controller('returnsController', function($scope, $http) {
    console.log("Books here");

    $scope.getReturnBooks = function() {
        $http({
            "url": "/lms-backend/index.php/v1/books/return",
            "method": "GET",
        }).then(function(success_response) {
            $scope.books = success_response.data
        }, function(error_response) {
            console.error(error_response);
        }).finally(function() {
            console.log("Done loading returns");
        })
    }

    	$scope.getReturnBooks();
    
    $scope.return_book = function(book) {
		$http({
			url: "/lms-backend/index.php/v1/books/return/" + book.book_id,
			method: "PATCH",
			data: {
				book_id: book.book_id,
				return_condition_id: book.return_condition_id,
				actual_return_date: book.actual_return_date
			}
		}).then(function(success) {
			console.log("Good");
		}, function(error) {
			console.error("Bad-something went wrong with update");
		}).finally(function() {
			$scope.getReturnBooks();
		})
	}

});