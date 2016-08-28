(function(){
  angular
    .module('portfolio.mobileNav.mobile-directive', [])
    .directive('navMobile', navMobile);

    function navMobile(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/navMobile.html',
        scope: {},
      };
      return directive;
}
})();
