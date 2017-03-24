(function () {
  'use strict';

  angular.module('googlebooks.pages.main')
    .filter('startFrom',    startFrom)
    .filter('formatFilter', formatFilter)
    .filter('dateFilter',   dateFilter)
    .filter('highlight',    highlight);


  function startFrom() {
    return function (input, start) {
      if (input) {
        start = +start;
        return input.slice(start);
      }
      return [];
    };
  }

  function formatFilter() {
    return function (text) {
      if (text !== null) {
        for (var i in text) {var authors = text[i]}
        return authors;
      }
    };
  }

  function dateFilter() {
    return function (text) {
      if (text !== null) {
        var d = new Date(text);
        var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        return (day + "/"+ month + "/" + year);
      }
    };
  }

  function highlight($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span style="background:yellow;" ">$1</span>')

      return $sce.trustAsHtml(text)
    }
  }


})();


