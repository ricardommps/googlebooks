angular.module('googlebooks.pages.main')
  .factory('MainService', MainService);

function MainService($q, $http) {
  var vm = this;
  vm.service = {
    search : search
  };
  return vm.service;

  function search(query ) {
      var def = $q.defer();
      var url = 'https://www.googleapis.com/books/v1/volumes?q=' + query.title + '&langRestrict=' + query.langRestrict +'&maxResults=40&orderBy=newest';
      $http.get(url)
        .then(function (res) {
          console.log(res);
          def.resolve(res.data);

        }, function (data) {
          def.reject("Failed");
        })

      return def.promise;
  }
}
