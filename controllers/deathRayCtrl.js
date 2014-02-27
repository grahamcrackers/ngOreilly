'use strict';
app.controller('DeathRayMenuCtrl', function($scope){
    $scope.menuState = {show: false};

    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    }
})