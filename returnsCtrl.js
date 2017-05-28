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

});