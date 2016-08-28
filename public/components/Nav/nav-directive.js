(function(){
  angular
    .module('portfolio.nav.nav-directive', [])
    .directive('sideNav', sideNav);

    function sideNav(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/sideNav.html',
        scope: {},
      };
      return directive;
    }
})();
