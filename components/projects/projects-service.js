(function(){
  angular
  .module('portfolio.projects.projects-service', [])
  .service('projectsService', projectsService);
  projectsService.$inject = [];
  function projectsService(){

      return {
        projectsInfo: projectsInfo
      };
      function projectsInfo(){
        var projects = [{
          title: 'The Hive',
          discription: 'PostgresQl, node.js, JavaScript, google maps api, Knex.js, passport google oauth. App is designed for bee spotting enthusiast, made to show location of bees seen along with type and image of the bee. PostgresQl, node.js, JavaScript, google maps api, Knex.js, passport google oauth.',
          github :  'https://github.com/TheHiveOrg/The-Hive',
          Deployed : 'https://the-hive-g25.herokuapp.com/',
          img : './img/Screen Shot 2016-08-22 at 10.17.47 AM.png'
        },
        {
          title: ' Todo-angular',
          discription: 'Walkthrough for making a decoupled angular app with a restful api and postgresql database .',
          github :  'https://github.com/app-walkthrough-example/angular-decoupled-links-',
          Deployed : 'https://angular-decoupled-app.firebaseapp.com/',
          img : './img/Screen Shot 2016-08-22 at 10.00.34 AM.png'
        },
        {
          title: ' Brick Breaker',
          discription: 'Walkthrough for making a decoupled angular app with a restful api and postgresql database .',
          github :  'https://github.com/apjames93/brick-breaker-game',
          Deployed : 'https://brick-breaker-game.firebaseapp.com',
          img : './img/Screen Shot 2016-08-11 at 5.41.08 PM.png'
        }];
        return projects;
      }

    }
})();
