app.controller('usersController', function($scope, $http) {
    console.log("Users here");

    $scope.addUser = function(user) {
        $scope.users.push(user);
    }

    $scope.getUsers = function() {
        $http({
            "url": "/lms-backend/index.php/v1/users",
            "method": "GET",
        }).then(function(success_response) {
            $scope.users = success_response.data
        }, function(error_response) {
            console.error(error_response);
        }).finally(function() {
            console.log("Done");
        })
    }

    $scope.getUsers();

    $scope.edit_user = function(user) {
        $http({
            url: "/lms-backend/index.php/v1/users/" + user.user_id,
            method: "PATCH",
            data: {
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                role: user.role
            }
        }).then(function(success) {
            console.log("Good");
        }, function(error) {
            console.error("Bad");
        }).finally(function() {
            $scope.getUsers();
        })
    }

    $scope.delete_user = function(user) {
        $http({
            url: "/lms-backend/index.php/v1/users/" + user.user_id,
            method: "DELETE",
        }).then(function(success) {
            console.log("Good");
        }, function(error) {
            console.error("Bad");
        }).finally(function() {
            $scope.getUsers();
        })
    }

    $scope.add_user = function(user) {
        $http({
            url: "/lms-backend/index.php/v1/users",
            method: "POST",
            data: {
                 first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                role: user.role
            }
        }).then(function(success) {
            console.log("Good");
        }, function(error) {
            console.error("Bad");
        }).finally(function() {
            $scope.getUsers();
        })
    }

});