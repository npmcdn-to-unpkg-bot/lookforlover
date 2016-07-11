/**
 * Created by 23 on 2016/5/14.
 */

var app = angular.module('myApp', []);
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);
app.controller('myCtrl',['$scope','$http','$location', function($scope,$http,$location) {
    $scope.querykaifang = function(index){
        var searchname = $scope.name;
        var requrl = "/kaifang/cgi/query.php?name=" + searchname + "&start=" +index + "&count=" + $scope.count;
        $http.get(requrl).then(function(responce){
            //var resobj = responce.data.response;
            var resobj = new Object();
            resobj.numFound = 1;
            var list = new Array();
            var info = new Object();
            info.Address = 'address';
            info.EMail = 'email';
            info.Mobile = 'mobile';
            info.Birthday = 'birthday';
            list[0] = info;
            resobj.docs = list;
            $scope.total = resobj.numFound;
            $scope.infolist = resobj.docs;
            $scope.pagecount = parseInt($scope.total/$scope.count) + 1;
            $scope.nowpage = $scope.nowidx/$scope.count + 1;
            $scope.showflag = 1;
        });
    }
    $scope.prepage = function(){
        if($scope.nowidx <= 0)
        {
            alert("已到第一页");
            return;
        }
        $scope.nowidx = $scope.nowidx-$scope.count;
        if(0 >= $scope.nowidx)
        {
            $scope.nowidx = 0;
        }
        $scope.querykaifang($scope.nowidx);
    }
    $scope.nextpage = function(){
        $scope.nowidx = $scope.nowidx+$scope.count;
        if($scope.nowidx >= $scope.total)
        {
            alert("已到最后一页");
            return;
        }
        $scope.querykaifang($scope.nowidx);
    }
    $scope.result = "";
    $scope.nowidx = 0;
    $scope.count = 10;
    $scope.total = 0;
    $scope.showflag = 0;
    if($location.search().lover)
    {
        $scope.name = $location.search().lover;
        $scope.querykaifang(0);
    }
    else
    {
        $scope.name = "";
    }




}]);
