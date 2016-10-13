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
          title: 'Face of Few Emotions ',
          discription: 'Decoupled AngularJS app using emotion detection to capture reactions to YouTube videos. you are able to log in and send videos you like you friends. Stack: Materialize, clmtrackr, HTML5 Media Access, Nodemailer, Node.js, Express, JWT, postgreSQL, Knex.js',
          github :  'https://github.com/apjames93/videoapp-links',
          Deployed : 'https://videoapp-71a17.firebaseapp.com/',
          img : './img/face.jpg'
        },
        {
          title: 'Nightmare',
          discription: 'This app is a first-person shooter game in which you kill zombies with a water gun. I was responsible for making the map with blender, door functionality in Unity with C#, AngularJS front-end, JWT and bcrypt authorization, database built in PostgreSQL, and back-end using Node.js with Express.Stack: AngularJS, JWT, bcrypt, Node.js, Express, Knex.js, Unity, C#, HTML5 Canvas, and Blender',
          github :  'https://github.com/The-Nightmare',
          Deployed : 'https://nightmare-f6a77.firebaseapp.com',
          img : './img/nightmare.png'
        },
        {
          title: ' Todo-angular',
          discription: 'Walkthrough for making a decoupled AngularJS CRUD app using a restful API design. Stack: AngularJS, PostgreSQl, Node.js, JavaScript, Knex.js, bcrypt',
          github :  'https://github.com/bam-walkthroughs/angular-decoupled-links',
          Deployed : 'https://angular-decoupled-app.firebaseapp.com/',
          img : './img/todo-angular.png'
        },
        {
          title: 'The Hive',
          discription: 'This app is designed for the bee spotting enthusiast, made to show the location of bees, including their type and image. Stack: PostgreSQl, Node.js, JavaScript, Google Maps API, Knex.js, Passport Google OAuth',
          github :  'https://github.com/TheHiveOrg/The-Hive',
          Deployed : 'https://the-hive-g25.herokuapp.com/',
          img : './img/thehive.png'
        },
        {
          title: ' Brick Breaker',
          discription: 'Brick Breaker is game in which the player must smash a wall of bricks by deflecting a bouncing ball with a paddle. Stack: JavaScript, HTML5 Canvas',
          github :  'https://github.com/apjames93/brick-breaker-game',
          Deployed : 'https://brick-breaker-game.firebaseapp.com',
          img : './img/brickBreaker.png'

        },
        {
          title: 'Car Project',
          discription: 'Application to find engine and transmission specifications for any vehicle included in the Edmunds API. Stack:  jQuery, Edmunds API, HTML, CSS',
          github :  'https://github.com/apjames93/carProject',
          Deployed : 'https://carproject.firebaseapp.com/',
          img : './img/carProject.png'
        }]; 
        return projects;
      }

    }
})();
