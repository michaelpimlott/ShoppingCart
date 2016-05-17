app.service('teaService', ['$http', function ($http) {
  var cart = [];

  return {
     getTea: function () {
      return $http.get('../../tea.json');
    },

    addItem: function(tea, qty) {
      qty == undefined ? tea.qty = 1 : tea.qty = Number(qty)
      cart.push(tea);
      return cart;
    },

    removeItem: function(item) {
      cart.splice(item, 1);
    },

    getItems: function () {
      return cart;
    },

    orderTotal: function(item) {
        var total = 0;
        var array = this.getItems();
        for (var i = 0; i < array.length; i++) {
          total += (array[i].qty * array[i].price)/100;
        }
        return '$'+total.toFixed(2);
    }

  }

}]);
