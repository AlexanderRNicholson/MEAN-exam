app.factory('Factory', ['$location', '$http', function($location, $http){
  var factory = {};
  factory.login = function(user){
    $http({
      url: '/login',
      method: 'POST',
      data: user
    }).then(function(res){
      console.log(res);
      $location.url('/dashboard')
    }, function(res){
      console.log('in Factory, logging in ', res);
    })
  };
  factory.logout = function(){
    $http({
      url: '/logout',
      method: 'GET'
    }).then(function(res){
      console.log("In factory, logging out.");
    })
  }
  factory.currentUser = function(callback){
    $http({
      url: '/current',
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    }, function(res){
      console.log(res);
    })
  }
  factory.addPoll = function(poll){
    $http({
      url: '/addPoll',
      method: 'POST',
      data: poll
    }).then(function(res){
      console.log('giving location url', res);
      $location.url('/dashboard')
    }, function(res){
      console.log('in Factory, making a poll ', res);
    })
  };
  factory.getPolls = function(callback){
    $http({
      url: '/polls',
      method: 'GET'
    }).then(function(res){
      console.log(res);
      callback(res.data)
    }, function(res){
      alert(res.data);
    })
  };
  factory.showPoll = function(id, callback){
    $http({
      url: '/poll/' + id,
      method: 'GET'
    }).then(function(res){
      console.log('in Factory, showing a poll', res);
      callback(res.data);
    }, function(res){
      console.log(res);
    })
  };
  factory.vote1 = function(id, callback, pollId){
    $http({
      url: '/vote1/' + id,
      method: 'GET'
    }).then(function(res){
      console.log("in the factory", res);
      callback(pollId);
    })
  }
  factory.vote2 = function(id, callback, pollId){
    $http({
      url: '/vote2/' + id,
      method: 'GET'
    }).then(function(res){
      console.log("in the factory", res);
      callback(pollId);
    })
  }
  factory.vote3 = function(id, callback, pollId){
    $http({
      url: '/vote3/' + id,
      method: 'GET'
    }).then(function(res){
      console.log("in the factory", res);
      callback(pollId);
    })
  }
  factory.vote4 = function(id, callback, pollId){
    $http({
      url: '/vote4/' + id,
      method: 'GET'
    }).then(function(res){
      console.log("in the factory", res);
      callback(pollId);
    })
  }
  factory.deletePoll = function(id, callback){
    $http({
      url: '/delete/' + id,
      method: 'DELETE'
    }).then(function(res){
      callback()
    }, function(res){
      alert(res.data);
    })
  }
  return factory;
}])
