angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.openMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});

