var prm=angular.module("edpApp.Sponsor.PRM",["edpApp"]);prm.controller("DefaultController",["$scope","$log","cfg",function(a,b,c){a.message="Hello, welcome prm",b.debug("heloooooooooooooooooo prm")}]),prm.controller("SponsorCtrl",["$scope","$log","cfg",function(a,b,c){a.message="Hello, welcome prm",b.debug("heloooooooooooooooooo prm")}]),prm.controller("HeaderController",["$scope","$log",function(a,b){b.debug("heloooooooooooooooooo prm / prm header exe"),a.instanceName="PRM",a.Pages=["20","21","22","23","24"]}]),prm.run(["$state","$rootScope","$window",function(a,b,c){a.go("home.dashboard")}]),prm.config(["$stateProvider","$httpProvider","$provide",function(a,b,c){a.state("home.dashboard",{url:"/dashboard",cache:!1,views:{"container@":{templateUrl:"views/contentLayout.html",controller:"DefaultController"}}})}]),angular.module("edpApp.Sponsor.PRM").run(["$templateCache",function(a){"use strict";a.put("views/contentLayout.html",'PRM content <a href="../">Parent SPA</a>')}]);