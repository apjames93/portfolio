(function(){
  angular
    .module('portfolio.nav.nav-directive', [])
    .directive('nav', nav);

    function nav(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/nav.html',
        scope: {},
      };
      return directive;
}



})();
