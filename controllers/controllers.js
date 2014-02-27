'use strict';

var app = angular.module('app',[]);


app.controller('TextController', function($scope){
    var messages = {};
    messages.someText = 'You have started your journey.';
    $scope.messages = messages;
});

app.controller('StartUpCtrl', function($scope){
    $scope.funding = {startingEstimate: 0};

    var computeNeeded = function() {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };

    $scope.$watch('funding.startingEstimate', computeNeeded);

    $scope.requestFunding = function(){
        window.alert("Sorry, please get more customers more.");
    };

    $scope.reset = function() {
        $scope.funding.startingEstimate = 0;
        $scope.funding.needed = 0;
    };
});

var students = [
    {name:'Mary Contrary', id: '1'},
    {name:'Jack Sprat', id: '2'},
    {name:'Jill Hill', id: '3'}];


app.controller('StudentListController', function($scope){
    $scope.students = students;

    $scope.insertTom = function() {
        $scope.students.splice(1,0, {name:'Tom Thumb', id:'4'});
    };
});


    var album = [
        {name:'Southwest Serenade', duration: '2:34'},
        {name:'Northern Light Waltz', duration: '3:21'},
        {name:'Eastern Tango', duration: '17:45'}
    ];
app.controller('AlbumController', function($scope){
    $scope.album = album;

});



