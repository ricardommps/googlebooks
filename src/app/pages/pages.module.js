
(function () {
  'use strict';

  angular.module('googlebooks.pages', [
    'ui.router',
    'googlebooks.pages.main',
    'googlebooks.pages.favoriteBooks'
  ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    // $urlRouterProvider.otherwise('/inteligentWifi/dashboard');
    $urlRouterProvider.otherwise('/main');

  }

})();
