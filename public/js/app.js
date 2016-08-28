
(function(){
  angular
    .module('portfolio',[
     'ui.router',
     'portfolio.aboutMe',
     'portfolio.resume',
     'portfolio.projects',
     'portfolio.nav',
     'portfolio.mobileNav',
     'portfolio.footer'
   ])
      .config(function($stateProvider, $urlRouterProvider, $locationProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: '/templates/home.html',
          controller: 'homeController'
        })
        .state('projects',{
          url: '/projects',
          templateUrl: '/templates/Alex-projects.html',
          controller: function ($scope, projectsService) {
            $scope.projectdata = projectsService.projectsInfo();
          }
        })
        .state('resmue',{
          url: '/resume',
          templateUrl: '/templates/Alex-resume.html'
        });
        // $locationProvider.html5Mode(true);
      });
})();
