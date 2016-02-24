angular.module('app')
  .controller('homeCtrl', function($scope, authService) {

    // $scope.hero = authService.currentHero();
    // console.log($scope.hero);


    $scope.hero = {
      "email": '3chordme@gmail.com',
      "password": '$2a$10$ezhZdjmo7mmGbCh64/K4uugceF0UeC4kqOSxZ7KGn.AQ7ZK9LW3ZO',
      "name": 'David Moore',
      "title": 'the Barbarian',
      "profileImage": './assets/images/angry_unicorn.png',
      "dateCreated": new Date(),
      "xp": 834,
      "level": 1,
      "equipment": {
        "resume": {
          "name": 'Resume',
          "url": 'https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button',
          "done": false
        },
        "linkedin": {
          "name": 'LinkedIn',
          "url": 'https://www.linkedin.com/in/davidcollinsmoore',
          "done": false
        },
        "portfolioSite": {
          "name": 'Portfolio',
          "done": false
        },
        "meetups": 2,
        "skills": ['HTML', 'CSS', 'AngularJS', 'NodeJS', 'mongoose'],
        "projects": [
          {
          "name": 'Wearther'
          },
          {
          "name": 'Reviewnicorn',
          "url": 'https://limitless-shelf-17558.herokuapp.com/#/login'
          }
        ]
      }
    };

    switch ($scope.hero.level) {
      case 1:
        $scope.weapon = "Thumping Stick";
        $scope.shield = "Stop Sign";
        $scope.armor = "Peasant Robe";
        $scope.helmet = "Feathered Cap";
        break;
      case 2:
        $scope.weapon = "Dagger";
        $scope.shield = "Buckler";
        $scope.armor = "Leather Armor";
        $scope.helmet = "Viking Helmet";
        break;
      case 3:
        $scope.weapon = "Warhammer";
        $scope.shield = "Wooden Shield";
        $scope.armor = "Chain Mail";
        $scope.helmet = "Spartan Helmet";
        break;
      case 4:
        $scope.weapon = "Longsword";
        $scope.shield = "Steel Shield";
        $scope.armor = "Plate Mail";
        $scope.helmet = "Knight Helmet";
        break;
      case 5:
        $scope.weapon = "Battle Axe";
        $scope.shield = "Mithril Tower Shield";
        $scope.armor = "Spiked Plate Mail";
        $scope.helmet = "Dragon Skull Helmet";
        break;
      case 6:
        $scope.weapon = "Lightsaber";
        $scope.shield = "Legendary Golden Shield of Aslan";
        $scope.armor = "Dragon Scale Armor";
        $scope.helmet = "Darth Vader Helmet";
        break;
    }

    $scope.tips = [{
      title: "resume",
      text: "A resume is a powerful weapon in the fight against No Jobba."
      // input: true,
      // buttonText: "I have a resume!"
    }, {
      title: "linkedin",
      text: "In this battle, a LinkedIn profile is your first line of defense."
    }, {
      title: "portfolioSite",
      text: "Get a portfolio."
    }, {
      title: "meetups",
      text: "Go meet up."
    }, {
      title: "projects",
      text: "Mekka project."
    }, {
      title: "skills",
      text: "Skills acquire you must advance in order to your career. Sorry, not my first language English is."
    }];

    for (var i = 0; i < $scope.tips.length; i++) {
      if ($scope.tips[i].title === "resume" && $scope.hero.equipment.resume.done) {
        $scope.tips.splice(i, 1);
      }
      if ($scope.tips[i].title === "linkedin" && $scope.hero.equipment.linkedin.done) {
        $scope.tips.splice(i, 1);
      }
      if ($scope.tips[i].title === "portfolioSite" && $scope.hero.equipment.portfolioSite.done) {
        $scope.tips.splice(i, 1);
      }
    }

    var num = 0;

    $scope.goatSays = $scope.tips[num];

    $scope.nextTip = function() {
      if (num < $scope.tips.length - 1) {
        num++;
      } else {
        num = 0;
      }
    $scope.goatSays = $scope.tips[num];
    $scope.showPreviousButton = true;
    };

    $scope.previousTip = function() {
      if (num > 0) {
        num--;
      } else {
        num = $scope.tips.length - 1;
      }
    $scope.goatSays = $scope.tips[num];
    };

    //other helmet ideas: batman mask? football helmet? propeller beanie? baseball hat with tag attached?

    //find all quests where _hero === currentUser, populate _job, populate the _steps, make an array of those quests, ng-repeat through them on the template. Also display the progress. Ugh. Too tired to even fake-code this. Goodnight.

  });
