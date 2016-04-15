var app = angular.module('peopleApp', []);

app.controller('PeopleController', ['$scope', '$http', function($scope, $http){
  // client side code
  var people = this;
  people.users = [];

  console.log(people.users);

  $scope.getPeople = function(){
    $http.get('/all').then(function(response){
      people.users = response.data;
      console.log(people.users);
    })

  }
  $scope.removeUser = function(user, index) {
    userId = user._id;
    $http.delete('/remove/' + userId).then(function(response){
        console.log('deleted', user);
    people.users.splice(index, 1);
    })
  }
}]);
