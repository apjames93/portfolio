(function(){
  angular
    .module('portfolio')
    .controller('homeController', homeController);

    homeController.$inject= ['$scope', '$location', 'projectsService', '$state'];

    function homeController($scope, $location, projectsServic, $state){
      
    }
})();
