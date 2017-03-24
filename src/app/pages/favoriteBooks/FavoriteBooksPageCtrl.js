(function () {
  'use strict';

  angular.module('googlebooks.pages.favoriteBooks')
    .controller('FavoriteBooksPageCtrl', FavoriteBooksPageCtrl);

  function FavoriteBooksPageCtrl($scope, $timeout, toastr,MainService, $filter, $window) {
    $scope.currentPage = 0;
    $scope.pageSize = 6;
    $scope.q = '';
    var vm = this;

    vm.myFavoritesBooks = JSON.parse($window.localStorage.getItem('favorite_books'));

    console.log(vm.myFavoritesBooks);

  }

})();

