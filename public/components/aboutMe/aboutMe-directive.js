(function(){
  angular
    .module('portfolio.aboutMe.aboutMe-directive', [])
    .directive('aboutMe', aboutMe);

    function aboutMe(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/aboutMe.html',
        scope: {},
      };
      return directive;
}



})();
