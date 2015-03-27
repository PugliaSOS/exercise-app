angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {

    $scope.openMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.load = function() {
        $scope.comments = angular.fromJson(
            window.localStorage.getItem('myApp') || []
        );
    };

    $scope.save = function() {
        window.localStorage.setItem('myApp', angular.toJson(
            $scope.comments || []
        ));
    };

    $scope.add = function(comment) {
        comment.data = new Date();
        $scope.comments.push(comment);
        $scope.save();
        $ionicSideMenuDelegate.toggleLeft();
        for (var i in comment) delete comment[i];
    };

    $scope.clear = function() {
        window.localStorage.removeItem('myApp');
        $scope.load();
    };

    $scope.load();
});

