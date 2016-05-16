app.controller('CartController', ['$scope', 'teaService', function ($scope, teaService) {
    $scope.editSave = 'Edit'
    $scope.editQuantity = false;
    $scope.cart = teaService.getItems();
    $scope.orderTotal = teaService.orderTotal();
    $scope.toggleEdit = function () {
      this.editQuantity = !this.editQuantity;
      this.showQuantity = !this.showQuantity;
      this.editSave = 'Save';
    }
    $scope.removeItem = function (item) {
      teaService.removeItem(item);
      $scope.orderTotal = teaService.orderTotal();
    }
}]);
