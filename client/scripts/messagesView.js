// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $chat: $('.chat'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    //delete view of all messages
    MessagesView.$chats.empty();
    //for each 'message' in Message._data[0]
    _.each(Messages._data[0], MessagesView.renderMessage);
    //MessagesViewrenderMessage
    MessagesView.$chat.click(MessagesView.handleClick);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    $(MessageView.render(message)).appendTo('#chats');

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list). (Bold friend messages)
    //on message click
      //send username to friends database
    //
    //toggleClass
    console.log('click!');
  }

};

/* [
{"message_id":59689,
"roomname":"the USA",
"text":"test",
"username":"sweet!",git
"github_handle":"NaNdyKing",
"campus":"rfe",
"created_at":"2022-04-22T21:29:01.571Z",
"updated_at":"2022-04-22T21:29:01.571Z"},
{
  "message_id":59688,
  "roomname":"test",
  "text":"<script>$(\"body\").prepend(\"you got pwned\")</script>",
  "username":"Dude41a239",
  "github_handle":"JakeReid53",
  "campus":"rfe",
  "created_at":"2022-04-22T21:28:08.938Z",
  "updated_at":"2022-04-22T21:28:08.938Z"
}
] */