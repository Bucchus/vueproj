/**
 * Created by Administrator on 2017/8/9 0009.
 */
angular.module("myApp")   //引用已存在的myApp模块
    .controller("PostRecordController", ["$scope", "$http", "$state",
        function ($scope, $http, $state) {
            $http({
                url: "http://localhost:3000/user/RecordList",
                method: "post",
                data: {
                    type: 0,// 0全部	1未支付 	2已支付
                    page: 1,// 第几页数据
                    count: 6// 每页6条数据
                }
            }).then(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        }]);