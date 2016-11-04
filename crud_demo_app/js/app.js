var app=angular.module("myApp",["controllerModule","ngRoute"]); //Define the angular module and inject the controllerModule as a DI

app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/",{                                                        //Define a default route
        templateUrl: "../views/customerList.html",
        controller: "mainController"
    }).
    when("/addCustomer",{                                             //Define a route to addCustomer
        templateUrl: "../views/addCustomer.html",
        controller: "addCustomerController"
    }).
    when("/editCustomer/:id",{                                         //Define a route to editCustomer
        templateUrl: "../views/editCustomer.html",
        controller: "editCustomerController"
    }).
    otherwise({redirectTo: "/"});
}])