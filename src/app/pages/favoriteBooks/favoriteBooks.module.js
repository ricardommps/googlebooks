(function () {
  'use strict';

  angular.module('googlebooks.pages.favoriteBooks', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('favoriteBooks', {
        url: '/favoriteBooks',
        templateUrl: 'app/pages/favoriteBooks/favoriteBooks.html',
        controller: 'FavoriteBooksPageCtrl',
        controllerAs: 'main',
        title: 'Meus Livros Favoritos'

      });
  }

})();


