angular.module('app')
    .directive('dirJobListing', function () {
        return {
            restrict: 'AE',
            templateUrl: './app/directives/postjobs/postjobs.dir.html',
            scope: {
                job: '=',
                hero: '='
            },
            controller: function ($scope, jobService, questService, ModalService, stepService, guildService) {

                $scope.getAllSteps = function () {
                    stepService.getSteps()
                        .then(function (response) {
                            $scope.stepsId = response;
                        })
                }
                $scope.getAllSteps();

                $scope.acceptQuest = function (jobId, heroId, stepsId) {
                    questService.createQuest({_job: jobId, _hero: heroId, _steps: stepsId})
                }

                $scope.editJob = function (jobId, heroId) {
                    jobService.editJob({_job: jobId, _hero: heroId})
                }

                $scope.deleteJob = function (jobId) {
                    jobService.deleteJob(jobId)
                    $scope.getJobs();
                }


                /*$scope.getGuild = function(hero) {
                 guildService.getGuilds();
                 }

                 $scope.getGuild();*/

                $scope.openEditJobModal = function (job) {
                    console.log(job, $scope.job);
                    ModalService.showModal({
                        templateUrl: "./app/modals/editjobs/editjobModal.ctrl.html",
                        controller: "editjobCtrl",
                        inputs: {hero: $scope.hero, job: job}
                    }).then(function (modal) {
                        modal.close.then(function (then) {
                        });
                    });
                };
            }
        }
    });
