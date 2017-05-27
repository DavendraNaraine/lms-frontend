app.controller('titlesController', function($scope, $http) {
	console.log("Titles here");

	$scope.addTitle = function(title) {
		$scope.titles.push(title);
	}

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

	$scope.getSubjects = function() {
		$http({
			"url": "/lms-backend/index.php/v1/subjects",
			"method": "GET",
		}).then(function(success_response) {
			$scope.subjects = success_response.data
		}, function(error_response) {
			console.error(error_response);
		}).finally(function() {
			console.log("Done");
		})
	}

	$scope.getTitles();
	$scope.getSubjects();

	$scope.edit_title = function(title) {
		$http({
			url: "/lms-backend/index.php/v1/titles/" + title.title_id,
			method: "PATCH",
			data: {
				title_name: title.title_name,
				title_author: title.title_author,
				title_coauthor: title.title_coauthor,
				title_edition: title.title_edition,
				title_publisher: title.title_publisher,
				title_isbn: title.title_isbn

			}
		}).then(function(success) {
			console.log("Good");
		}, function(error) {
			console.error("Bad");
		}).finally(function() {
			$scope.getTitles();
		})
	}

	$scope.add_title = function(title) {
		$http({
			url: "/lms-backend/index.php/v1/titles",
			method: "POST",
			data: {
				title_name: title.title_name,
				title_author: title.title_author,
				title_coauthor: title.title_coauthor,
				title_edition: title.title_edition,
				title_publisher: title.title_publisher,
				title_isbn: title.title_isbn,
				subject_id: title.subject_id

			}
		}).then(function(success) {
			console.log("Good");
		}, function(error) {
			console.error("Bad");
		}).finally(function() {
			$scope.getTitles();
		})
	}
});