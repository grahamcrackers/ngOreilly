'use strict';
app.controller('DeathRayMenuCtrl', function($scope){
    $scope.menuState = {show: false};
    $scope.isDisabled = false;

    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    }

    $scope.stun = function() {
        //stun the target, then disable menu to allow regeneration
        $scope.isDisabled = true;
    }
})