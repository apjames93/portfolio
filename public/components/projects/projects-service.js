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
          img : './img/Screen Shot 2016-08-22 at 10.27.44 AM.png'
        },
        {
          title: 'Car Project',
          discription: 'using jQuery and edmunds api app finds motor and transmission specs for cars.',
          github :  'https://github.com/apjames93/carProject',
          Deployed : 'https://carproject.firebaseio.com',
          img : './img/Screen Shot 2016-08-11 at 5.41.08 PM.png'
        },
        {
          title: 'Nightmare',
          discription: 'This app is a first-person shooter game in which you kill zombies with a watergun.Technologies used angularJS, jwt bcrypt, Node.JS, Express, Knex.js Unity, C# and Blender to make the 3D map',
          github :  'https://github.com/The-Nightmare/App/blob/development/README.md',
          Deployed : 'https://nightmare-f6a77.firebaseapp.com',
          img : './img/Screen Shot 2016-08-24 at 10.35.54 PM.png'

        }];
        return projects;
      }

    }
})();
