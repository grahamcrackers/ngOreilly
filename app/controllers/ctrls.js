'use strict';
//Create a module for our core AMail services
var app = angular.module('AMail',['ngRoute']);


//Set up our mappings between URLs, templates, and controllers

function emailRouteConfig($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/views/list.html',
            controller: ListController
        })
        //Notice that for the detail view, we specify a parameterized URL component
        //by placing a colon in front of the id
        .when('/view/:id', {
            templateUrl: '/app/views/detail.html',
            controller: DetailController
        })
        .otherwise({
            redirectTo: '/'
        });
}

//Set up our route to the AMail service can find it
app.config(['$routeProvider', emailRouteConfig]);

//Some fake emails
var messages = [{
    id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
    date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
    message: 'Hey, we should get together for lunch sometime and catch up.'
    +'There are many things we should collaborate on this year.'
}, {
    id: 1, sender: 'maria@somecompany.com', subject: 'Where did you leave my laptop?',
    date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
    message: 'I thought you were going to put it in my desk drawer.'
    +'But it does not seem to be there.'
}, {
    id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
    date: 'Dec 6, 2013 12:32:00', recipients: ['greg@somecompany.com'],
    message: 'Hey, we should get together for lunch sometime and catch up.'
        +'There are many things we should collaborate on this year.'
}];

//Publish our messages for the list template
function ListController($scope, $routeParams) {
    $scope.messages = messages;
}

// Get the message id from the route (parsed from the URL) and use it to find the right message object.
function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}