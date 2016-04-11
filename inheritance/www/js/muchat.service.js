angular.module('starter.services').factory('MuChat', MuChat);

MuChat.$inject = ['Chat'];

function MuChat(Chat) {
    return (function() {
        function MuChat() {
            Chat.apply(this, arguments);
        }

        MuChat.prototype = Object.create(Chat.prototype);
        MuChat.prototype.constructor = MuChat;

        MuChat.prototype._get = function(chatId) {
            console.log('get muchat');
            for (var i = 0; i < this.chats.length; i++) {
                if (this.chats[i].id === parseInt(chatId)) {
                    return this.chats[i];
                }
            }
            return null;
        };
        return MuChat;
    })();
}