app.controller('UserController', ['$scope', '$location', '$routeParams', 'Factory', function($scope, $location, $routeParams, Factory){

    $scope.login = function(userForm){
      console.log(userForm);
      Factory.login(userForm);
    }
    function logout(){
      Factory.logout();
    }
    logout();
}])
