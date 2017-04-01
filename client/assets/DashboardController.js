app.controller('DashboardController', ['$scope', '$location', '$routeParams', 'Factory', function($scope, $location, $routeParams, Factory){
  function getPolls(){
    Factory.getPolls(function(data){
      $scope.polls = data
    })
  }
  function currentUser(){
      Factory.currentUser(function(data){
        $scope.user = data; //used whenever we need to get information
      });
    }
  $scope.deletePoll = function(id){
    console.log(id);
    Factory.deletePoll(id, getPolls);
  }
    getPolls();
    currentUser();
}])
