/**
 * Created by 23 on 2016/5/30.
 */

var app = angular.module('myApp', []);
/*
app.config(function($locationProvider){
    $locationProvider.html5Mode(true);
});

    .controller('indexCtrl', function($scope) {
    })
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/index', {
                templateUrl: 'index.html',
                controller: 'indexCtrl'
            })
            .when('/search/:username', {
                templateUrl: 'search.html',
                controller: 'myCtrl'
            });

        // configure html5
        $locationProvider.html5Mode(true);
    });

app.controller('indexCtrl',function ($scope) {}).config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'kaifang/html/index.html',
            controller : indexCtrl
        });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});
 */
app.controller('indexCtrl',['$scope','$http','$location', function($scope,$http,$location) {
    /*
    $scope.findlover = function(){
         var jumppath = "/search.html?lover=" + $scope.lovername;
         var curUrl = $location.absUrl();
         $location.url(jumppath);
         */
       // var jumppath = "/kaifang/html/search.html";
       // $state.go(jumppath,{lover:$scope.lovername});
       // $state.go('searcher', {lovername: "test"});
   // }
}]);
