(function () {
  'use strict';

  angular.module('googlebooks.pages.main')
    .controller('MainPageCtrl', MainPageCtrl);

  function MainPageCtrl($scope,MainService, $filter, $window, filterFilter) {


    var vm = this;


    vm.search = _search;
    vm.addFavorites = _addFavorites;
    vm.myFavorites =  _myFavorites;

    vm.langRestrict = ['pt','en'];
    vm.searchBook ={};
    vm.searchBook.langRestrict = 'pt';
    vm.selected = [];

    function _myFavorites() {
      vm.myFavoritesBooks = JSON.parse($window.localStorage.getItem('favorite_books'));
    }
    function _addFavorites(item,$event) {
      var favoritesBooks = JSON.parse($window.localStorage.getItem('favorite_books'));
      if(favoritesBooks){
        console.log("Favoritos")
      }else{
        favoritesBooks = [];
      }
      if(item.favorite){
        angular.forEach(favoritesBooks, function(favorites,key){
          //favoritesBooks.splice(favorites.indexOf(item.id), 1)
          if(favorites.id ==item.id ){
            favoritesBooks.splice(key, 1);
          }
        });
      }else{
        favoritesBooks.push(item);
      }

      localStorage.setItem("favorite_books", JSON.stringify(favoritesBooks));
    }
    function _search() {
      vm.searchTitle = "";
      MainService.search(vm.searchBook)
        .then(function (res) {
          console.log(res.items);
          vm.bookResults = res.items;
          $scope.totalItems = vm.bookResults.length;
          vm.searchTitle = vm.searchBook.title;
          checkFavoritesBooks();

        }, function (data) {
          //printConsole("ERROR");
          //modal();
        });
    }

    function checkFavoritesBooks() {
      var favoritesBooks = JSON.parse($window.localStorage.getItem('favorite_books'));
      if(favoritesBooks){
        angular.forEach(favoritesBooks, function(favorites) {
          console.log(favorites.id);
          angular.forEach(vm.bookResults, function(books,key) {
            if(favorites.id == books.id){
              console.log(key);
              books.favorite = true;
            }

          });

        });
      }
    }
  }

})();

