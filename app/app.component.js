
let shoppingListApp = angular.module("shoppingList", []);

shoppingListApp.controller("shoppingListCtrl", function($http, $scope) {
    $http.get('http://localhost:8080/api/shopList/v1').then(function (response){
        $scope.myData = response.data;
    });

    $scope.openModal = function() {
        $scope.nome = "";
        $scope.idade = "";

        
        // Abra o modal Bootstrap
        $('#myModal').modal('show');
    };

})