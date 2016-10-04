"use strict";

var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "player" },
        React.createElement(Player, null)
      ),
      React.createElement(
        "div",
        { className: "library" },
        React.createElement(Library, null)
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQU0sTUFBTSxXQUFOLENBQW1COzs7QUFDM0IsVUFBUSxrQkFBWTtBQUNsQixXQUNFOztRQUFLLFdBQVUsV0FBVixFQUFMO01BQ0U7O1VBQUssV0FBVSxRQUFWLEVBQUw7UUFDRSxvQkFBQyxNQUFELE9BREY7T0FERjtNQUlFOztVQUFLLFdBQVUsU0FBVixFQUFMO1FBQ0Usb0JBQUMsT0FBRCxPQURGO09BSkY7S0FERixDQURrQjtHQUFaO0NBREEsQ0FBTjs7QUFpQkosU0FBUyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUIsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyAoe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cbiAgICAgICAgICA8UGxheWVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpYnJhcnlcIj5cbiAgICAgICAgICA8TGlicmFyeSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyJdfQ==