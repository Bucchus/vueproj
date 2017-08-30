/**
 * Created by Administrator on 2017/8/4 0004.
 */
angular.module("myApp")
.controller("RegController",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {
    $scope.reg=function (allOk) {
        $scope.agreeRule=false;
        if(allOk){
            $http({
                url:"http://localhost:3000/user/reg",
                method:"post",
                data:{
                    name:$scope.username,
                    phone:$scope.phone,
                    password:$scope.password,
                    passwordRepeat:$scope.passwordRepeat
                }
            }).then(function success(data) {
                console.log(data);
                if(data.data.resultCode!="0000"){
                    console.log("222")
                }else{
                    $scope.messages="";
                    console.log($scope.username);
                    $rootScope.regUser = $scope.username;
                    $state.go("home");

                }

            },function error(err) {
                console.log(err);
            })
        }else{
            console.log("输入信息不全")
        }

    };
}]).directive('compare',function () {
    {
        var hp={};
        hp.strict='AE';
        hp.scope={
            orgText:'=compare'
        };
        hp.require='ngModel';
        hp.link=function (scope,element,attrs,ctrl) {
            ctrl.$validators.compare=function (prevalue) {
                return prevalue==scope.orgText;
            };
            scope.$watch('orgText',function () {
                ctrl.$validate();

            })
        };
        return hp
    }
})