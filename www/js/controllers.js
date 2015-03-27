angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {

    var load = function() {
        $scope.comments = angular.fromJson(
            window.localStorage.getItem('myApp') || []
        );
    };

    var save = function() {
        window.localStorage.setItem('myApp', angular.toJson(
            $scope.comments || []
        ));
    };

    load();

    $scope.add = function(comment) {
        comment.data = new Date();
        $scope.comments.push(comment);
        save();
        $ionicSideMenuDelegate.toggleLeft();
        for (var i in comment) delete comment[i];
    };

    $scope.clear = function() {
        window.localStorage.removeItem('myApp');
        load();
    };

    $scope.openMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});

