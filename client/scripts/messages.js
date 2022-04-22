// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {}, // obj?
  // push
  // push: function () {
  // Parse.readAll(successCB, errorCB);
  // Store result in _data
  // }
  // pop
  // delete



  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};

Parse.readAll(function (returnedData) {
  console.log(JSON.stringify(returnedData));
});
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