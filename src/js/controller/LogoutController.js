/**
 * Created by Administrator on 2017/8/4 0004.
 */
angular.module("myApp")
.controller("LogoutController",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {
    $rootScope.loginUser = null;
    $state.go("home");
}]);