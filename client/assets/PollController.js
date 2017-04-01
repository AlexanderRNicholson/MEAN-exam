app.controller('PollController', ['$scope', '$location', '$routeParams', 'Factory', function($scope, $location, $routeParams, Factory){
  function showPoll(id){
    console.log($routeParams.id);
    Factory.showPoll(id, function(data){
      $scope.showPoll = data
    })
  }
  $scope.vote1 = function(option){
    console.log(option);
    Factory.vote1(option, showPoll, $routeParams.id)
  }
  $scope.vote2 = function(option){
    console.log(option);
    Factory.vote2(option, showPoll, $routeParams.id)
  }
  $scope.vote3 = function(option){
    console.log(option);
    Factory.vote3(option, showPoll, $routeParams.id)
  }
  $scope.vote4 = function(option){
    console.log(option);
    Factory.vote4(option, showPoll, $routeParams.id)
  }
  showPoll($routeParams.id);
}])
