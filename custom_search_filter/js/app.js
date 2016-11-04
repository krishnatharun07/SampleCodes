var userApp=angular.module("userApp",[]);
			userApp.controller("controller",function($scope,$http){
				$http.get("http://jsonplaceholder.typicode.com/users").success(function(response){
					$scope.users=response;
				});
			});
			userApp.filter("customSearch",function(){
						return function(input,search){
						console.log(input);
						var output=[];
						if(search==null)
							{
								return input;
							}		
						else
							{
								for(i=0;i<input.length;i++)
									{
										if(input[i].username.toLowerCase().startsWith(search.toLowerCase()))
											{
												output.push(input[i]);
											}  
									}
						return output;
           }
   }
});