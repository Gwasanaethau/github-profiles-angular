githubUserSearch.controller('GitUserSearchController', ['$scope', '$resource', function($scope, $resource) {


  $scope.searchResource = $resource('https://api.github.com/search/users/');

  $scope.doSearch = function() {

    if ( $scope.searchTerm != "" ) {
      $scope.searchResult = $scope.searchResource.get(
        { q: $scope.searchTerm }
      );
      $scope.showSpan = true;
    } else {
      $scope.showSpan = false;
    };
  };
}]);
