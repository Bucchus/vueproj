/**
 * Created by Administrator on 2017/8/4 0004.
 */
angular.module("myApp",["ui.router"])
.config(["$stateProvider","$urlRouterProvider","$httpProvider",function ($stateProvider,$urlRouterProvider,$httpProvider) {
    $urlRouterProvider.otherwise("/home");


    $stateProvider
        .state("home",{
            url:"/home",
            templateUrl:"views/home.html",
            controller:"HomeController"
        })
        .state("reg",{
            url:"/reg",
            templateUrl:"views/reg.html",
            controller:"RegController"
        })
        .state("login",{
            url:"/login",
            templateUrl:"views/login.html",
            controller:"LoginController"
        })
        .state("logout", {
            url: "/logout",
            controller: "LogoutController"
        })
        .state("mvlist",{
            url:"/mvlist",
            templateUrl:"views/mvlist.html",
            controller:"ListController"
        })
        .state("pcenter",{
            url:"/pcenter",
            templateUrl:"views/pcenter.html",
            controller:"CenterController"
            /*abstract: true*/
        })
        .state("pcenter.myinfo",{
            url:"/myinfo",
            views:{
                "hp":  {
                    templateUrl:"views/myinfo.html" ,
                    controller: "PostRecordController"
                }
            }


        })
        .state("pcenter.mypage",{
            url:"/mypage",
            views:{
                "hp":  {
                    templateUrl:"views/mypage.html" ,
                    controller: "MainPageController"
                }
            }


        });
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
        for (name in obj) {
            value = obj[name];
            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    };
    $httpProvider.defaults.transformRequest = [
        function(data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }
    ];
}]);