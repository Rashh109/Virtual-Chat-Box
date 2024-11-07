angular.module('chatApp', [])
.controller('ChatController', function($scope, $timeout) {
    var chatCtrl = this;
    chatCtrl.messages = [
        {user: 'Bot', text: 'Welcome to the chat! How can I assist you?'}
    ];
    chatCtrl.newMessage = '';
    chatCtrl.user = 'User';

    chatCtrl.botReplies = {
        'hey': 'Hello there! How can I help you?',
        'how are you': 'I am just a bot, but I am functioning as expected!',
        'your name': 'I am your virtual assistant. How can I help you?',
        'bye': 'Goodbye! Have a great day!'
    };

    chatCtrl.sendMessage = function() {
        if (chatCtrl.newMessage.trim() !== '') {
            var userMessage = {user: chatCtrl.user, text: chatCtrl.newMessage};
            chatCtrl.messages.push(userMessage);
            var userMessageText = chatCtrl.newMessage.toLowerCase();
            chatCtrl.newMessage = '';

            $timeout(function() {
                var botResponse = chatCtrl.botReplies[userMessageText] || "Sorry, I didn't understand that. Can you please rephrase?";
                chatCtrl.messages.push({user: 'Bot', text: botResponse});
            }, 1000);
        }
    };

    chatCtrl.checkKeyPress = function(event) {
        if (event.which === 13) {
            chatCtrl.sendMessage();
        }
    };
});
