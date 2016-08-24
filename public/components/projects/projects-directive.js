(function(){
  angular
    .module('portfolio.projects.projects-directive', [])
    .directive('projects', projects);

    function projects(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/projects.html',
        scope: {
          project : '='
        },
        controller: projectsController,
        controllerAs: 'projectsController'
      };
      return directive;
}
projectsController.$inject = ['projectsService'];
function projectsController(projectsService) {
  projectsService.projectsInfo();
  }


})();
