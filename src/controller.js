var webApp = angular.module("webApp", []);

webApp.controller('purposeController', ['$http', '$scope', function($http, $scope, ) {

    $http.get('src\data.json')
        .then(function(response) {
            console.log("line9" + response.data);
            $scope.purposeList = response.data.purposeList;
            $scope.projectStageList = response.data.stageList;
            $scope.projectTrackerList = response.data.projectsDataList;
        });
}]);