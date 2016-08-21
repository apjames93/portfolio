(function(){
  angular
    .module('portfolio.resume.resume-directive', [])
    .directive('resume', resume);

    function resume(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/resume.html',
        scope: {},
      };
      return directive;
}



})();
