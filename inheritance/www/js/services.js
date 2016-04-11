angular.module('starter.services', [])


.factory('Chat', function() {
    return (function() {
        function Chat() {
            this.chats = [{
                id: 0,
                name: 'Ben Sparrow',
                lastText: 'You on your way?',
                face: 'img/ben.png'
            }, {
                id: 1,
                name: 'Max Lynx',
                lastText: 'Hey, it\'s me',
                face: 'img/max.png'
            }, {
                id: 2,
                name: 'Adam Bradleyson',
                lastText: 'I should buy a boat',
                face: 'img/adam.jpg'
            }, {
                id: 3,
                name: 'Perry Governor',
                lastText: 'Look at my mukluks!',
                face: 'img/perry.png'
            }, {
                id: 4,
                name: 'Mike Harrington',
                lastText: 'This is wicked good ice cream.',
                face: 'img/mike.png'
            }];
        }

        function get(chatId) {
            for (var i = 0; i < this.chats.length; i++) {
                if (this.chats[i].id === parseInt(chatId)) {
                    return this.chats[i];
                }
            }
            return null;
        }

        Chat.prototype.all = function() {
            return this.chats;
        };
        Chat.prototype.remove = function(chat) {
            this.chats.splice(this.chats.indexOf(chat), 1);
        };
        Chat.prototype.get = function(chatId) {
            return this._get(chatId);
        };

        Chat.prototype._get = function(chatId) {
            console.log('get chat');
            for (var i = 0; i < this.chats.length; i++) {
                if (this.chats[i].id === parseInt(chatId)) {
                    return this.chats[i];
                }
            }
            return null;
        };
        return Chat;
    })();
})

.factory('MuChat', function(Chat) {
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
})

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
