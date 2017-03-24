(function () {
  'use strict';

  angular.module('googlebooks.pages.main', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainPageCtrl',
        controllerAs: 'main',
        title: 'Main'

      });
  }

})();


