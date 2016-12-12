'use strict';

app.controller('HomeCtrl', ['$http','$scope',function($http,$scope ) {

    $scope.files = $http.get('/api/home').success(function(fileJson){
        return fileJson.item;
      });

}]);

