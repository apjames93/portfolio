(function(){
  angular
    .module('portfolio.topName.topName-directive', [])
    .directive('topName', topName);
    function topName(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/topName.html',
        scope: {},
      };
      return directive;
}
})();
