// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`

    <div class="chat">
      <div class="username"> <%- username  %> </div>
      <div class="text"> <%- text %></div>
      <div class="createdAt"> <%- created_at %></div>
    </div>
    `)

// create c

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
  "text":"Our test message",
  "username":"Dude41a239",
  "github_handle":"JakeReid53",
  "campus":"rfe",
  "created_at":"2022-04-22T21:28:08.938Z",
  "updated_at":"2022-04-22T21:28:08.938Z"
}
] */