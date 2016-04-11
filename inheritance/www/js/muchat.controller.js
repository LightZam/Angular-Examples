
angular.module('starter.controllers').controller('MuChatDetailCtrl', MuChatDetailCtrl);

MuChatDetailCtrl.$inject = ['$stateParams', '$scope', 'MuChat'];

function MuChatDetailCtrl($stateParams, $scope, MuChat) {
    var vm = this;
    ChatDetailCtrl.apply(this, arguments);

    vm.getChat = function() {
        console.log('MuChatDetailCtrl')
        return new MuChat();
    }

    vm.hello = function() {
        return 'hello'.toUpperCase();
    }

    vm.init();
    console.log(vm.hello());
    vm.send();
}

MuChatDetailCtrl.prototype = Object.create(ChatDetailCtrl.prototype);
MuChatDetailCtrl.prototype.constructor = MuChatDetailCtrl;