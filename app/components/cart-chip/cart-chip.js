angular.module('ecommerce').component('cart-chip', {
    template: '{{cp.getItems()}}',
    controller: function(cartSrvc) {
        this.getItems = cartSrvc.getNumberItems
    },
    conrollerAs: 'cp'
})