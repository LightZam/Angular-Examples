

angular.module('starter.controllers').controller('UChatDetailCtrl', UChatDetailCtrl);

UChatDetailCtrl.$inject = ['$stateParams', 'Chat', 'MuChat'];

function UChatDetailCtrl($stateParams, Chat, MuChat) {
    var vm = this;
    ChatDetailCtrl.apply(this, arguments);

    vm.getChat = function() {
        console.log('UChatDetailCtrl')
        return new Chat();
    };

    vm.hello = function() {
        return 'hello';
    };


    vm.init();
    console.log(vm.hello());
    vm.send();
}

UChatDetailCtrl.prototype = Object.create(ChatDetailCtrl.prototype);
UChatDetailCtrl.prototype.constructor = UChatDetailCtrl;
