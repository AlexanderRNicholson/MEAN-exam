app.controller('CreateController', ['$scope', '$location', '$routeParams', 'Factory', function($scope, $location, $routeParams, Factory){

   $scope.addPoll = function(newPoll){
     console.log('in Create Controller, logging: ', newPoll);
     Factory.addPoll(newPoll);
     $scope.newPoll = {};
   }
}])
