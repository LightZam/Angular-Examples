angular.module('starter.controllers').controller('ChatDetailCtrl', ChatDetailCtrl);

ChatDetailCtrl.$inject = ['$stateParams', 'Chat', 'MuChat'];

function ChatDetailCtrl($stateParams, Chat, MuChat) {
    var vm = this;
    vm.version = 1;

    vm.getChat = function() {
        return new Chat();
    };

    vm.hello = function() {
        return 'hello';
    };

    vm.init = function() {
        console.log('ChatDetailCtrl')
        chat = vm.getChat();
        vm.chat = chat.get($stateParams.chatId);
    }

    function getVersion() {
        return vm.version;
    }

    function getA() {
        return 'A';
    }
}

ChatDetailCtrl.prototype.send = function() {
    console.log('ChatDetailCtrl send', this.getChat());
};