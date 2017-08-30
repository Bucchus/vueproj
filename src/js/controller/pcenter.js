/**
 * Created by Administrator on 2017/8/8 0008.
 */
angular.module("myApp")
    .controller("CenterController",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {
        console.log($rootScope.loginUser.phone);
        $http({
            url:"http://localhost:3000/user/info",
            method:"post",
            data:{
                phone:$rootScope.loginUser.phone
            }
        }).then(function success(data) {
            console.log("信息",data);
            $scope.user=data.data.result;
            $state.go("pcenter.mypage");
            console.log("个人界面");

        },function error(err) {
            console.log(err);
        });
        /*$scope.reg=function (allOk) {
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
                    console.log(data.data.resultCode=="00000");
                    if(data.data.resultCode!="0000"){
                        $scope.messages=data.data.resultMsg;
                    }else{
                        $scope.messages="";
                        $rootScope.loginUser = data.data.result.username;
                        $state.go("home");

                    }
                },function error(err) {
                    console.log(err);
                })
            }else{
                console.log("输入信息不全")
            }

        }*/
    }]);



