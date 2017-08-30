/**
 * Created by Administrator on 2017/8/4 0004.
 */
angular.module("myApp")
    .controller("LoginController",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {

        $scope.reg=function (allOk) {
            if(allOk){
                $http({
                    url:"http://localhost:3000/user/login",
                    method:"post",
                    data:{
                        phone:$scope.phone,
                        password:$scope.password
                    }
                }).then(function success(data) {

                    console.log(data.data.resultMsg);
                    console.log(data.data.resultCode=="0000");
                    if(data.data.resultCode!="0000"){
                        $scope.messages=data.data.resultMsg;
                    }else{
                        $scope.messages="";
                        $rootScope.loginUser = data.data.result;
                        $state.go("home");
                        console.log(data)

                    }
                },function error(err) {
                    console.log(err);
                })
            }else{
                console.log("输入信息不全")
            }

        }
    }]);



