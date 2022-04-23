// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    _.each(Rooms._data[0], RoomsView.renderRoom);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    $(`<option value="${roomname}"> ${roomname}<option>`).appendTo(RoomsView.$select);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};