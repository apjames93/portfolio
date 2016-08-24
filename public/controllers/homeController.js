(function(){
  angular
    .module('portfolio')
    .controller('homeController', homeController);

    homeController.$inject= ['$scope', '$location', 'projectsService'];

    function homeController($scope, $location, projectsService){

    }
})();
