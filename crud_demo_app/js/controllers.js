//This file contains the factory and controllers required to render the view

var controllerModule=angular.module("controllerModule",[]);

controllerModule.controller("mainController",["$scope","customerService", function($scope,customerService){
    $scope.message="Main Controller";
    
    customerService.getCustomer().then(function(response){
        $scope.listOfCustomers=response.data;
    });
    
    $scope.deleteCustomer =  function(id,index){
        $scope.listOfCustomers.splice(index,1);
        customerService.deleteCustomer(id);
    }
}]);

//Define controllers for each view
controllerModule.controller("addCustomerController", ["$scope","customerService", function($scope,customerService){
    $scope.message = "Add Customer Details"; 
    $scope.addCustomer = function(){
        customerService.addCustomer($scope.customer);
    }
}]);

controllerModule.controller("editCustomerController", ["$scope","$routeParams","customerService", function($scope,customerService,$routeParams){
     $scope.message = "Update Customer Details";
     var id=$routeParams.id;
     customerService.getCustomerByID(id).then(function(response){
         $scope.customer=response.data.customer;                                                  
                                                       
     })
                                                       
                                                       
     $scope.updateCustomer = function(){
         customerService.updateCustomer($scope.customer);
     }
                                    
                                                       
                                                       
}]);


//Create a factory

controllerModule.factory("customerService",["$http", function($http){
    var object={};
    
    //Call the getCustomers API
    object.getCustomer = function(){
        return $http.get("../DB/customers/getCustomers");
    }
    
    object.getCustomerByID = function(id){
        return $http.get("../DB/customers/getCustomers", {params:{id : id}});
    }
    
    //Add a customer
    object.addCustomer = function(customer){
        $http.post("../DB/customers/addCustomer", player).success(function(response){
            alert(response.status);
        })   
    }
    
    //Update a customer
    object.updateCustomer = function(customer){
        $http.post("../DB/customers/updateCustomer", player).success(function(response){
            alert(response.status);
        })   
    }
    
    //Delete a customer
    object.deleteCustomer = function(id){
        $http.post("../DB/customers/deleteCustomer", {id : id}).success(function(response){
            alert(response.status);
        })   
    }
    return object;
    
}])