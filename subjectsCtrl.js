app.controller('subjectsController', function($scope, $http) {
    console.log("Subjects here");

    $scope.addSubject = function(subject) {
        $scope.subjects.push(subject);
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

    $scope.getSubjects();

    $scope.edit_subject = function(subject) {
        $http({
            url: "/lms-backend/index.php/v1/subjects/" + subject.subject_id,
            method: "PATCH",
            data: {
                subject_name: subject.subject_name

            }
        }).then(function(success) {
            console.log("Good");
        }, function(error) {
            console.error("Bad");
        }).finally(function() {
            $scope.getSubjects();
        })
    }

    $scope.add_subject = function(subject) {
        $http({
            url: "/lms-backend/index.php/v1/subjects",
            method: "POST",
            data: {
                subject_name: subject.subject_name
            }
        }).then(function(success) {
            console.log("Good");
        }, function(error) {
            console.error("Bad");
        }).finally(function() {
            $scope.getSubjects();
        })
    }
});