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
          title: 'Nightmare',
          discription: 'This app is a first-person shooter game in which you kill zombies with a watergun.Technologies used angularJS, jwt bcrypt, Node.JS, Express, Knex.js Unity, C# and Blender to make the 3D map. I was responsible for making the map with blender, door opening/closing functionality in unity with c#, AngularJS front end, JWT and bcrypt, database and backend Express routes/ queries',
          github :  'https://github.com/The-Nightmare',
          Deployed : 'https://nightmare-f6a77.firebaseapp.com',
          img : './img/nightmare.png'
        },
        {
          title: 'The Hive',
          discription: ' App is designed for bee spotting enthusiast, made to show location of bees seen along with type and image of the bee. PostgresQl, node.js, JavaScript, google maps api, Knex.js, passport google OAuth. I was responsible for database in postgreSQL, google OAuth and routes',
          github :  'https://github.com/TheHiveOrg/The-Hive',
          Deployed : 'https://the-hive-g25.herokuapp.com/',
          img : './img/thehive.png'
        },
        {
          title: ' Todo-angular',
          discription: 'Walkthrough for making a decoupled AngularJS app with a restful api using JWT, postgreSQL, Knex.js, deploying to firebase/ heroku from start to finish.',
          github :  'https://github.com/bam-walkthroughs/angular-decoupled-links',
          Deployed : 'https://angular-decoupled-app.firebaseapp.com/',
          img : './img/todo-angular.png'
        },
        {
          title: ' Brick Breaker',
          discription: 'Brick Braker made with vanilla JavaScript and HTML5 canvas just becuse.',
          github :  'https://github.com/apjames93/brick-breaker-game',
          Deployed : 'https://brick-breaker-game.firebaseapp.com',
          img : './img/brickBraker.png'

        },
        {
          title: 'Car Project',
          discription: 'using jQuery and edmunds api app finds motor and transmission specs for cars.',
          github :  'https://github.com/apjames93/carProject',
          Deployed : 'https://carproject.firebaseapp.com/',
          img : './img/carProject.png'
        }];
        return projects;
      }

    }
})();
