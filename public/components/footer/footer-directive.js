(function(){
  angular
    .module('portfolio.footer.footer-directive', [])
    .directive('footerDirective', footerDirective);

    function footerDirective(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/footerDirective.html',
        scope: {},
      };
      return directive;
}
})();
