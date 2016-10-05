"use strict";

var QueueEntry = function QueueEntry(props) {
  return React.createElement(
    "li",
    { onClick: props.dequeue.bind(null, props.id) },
    React.createElement(
      "div",
      { className: "queue-artist" },
      props.song.artist
    ),
    React.createElement(
      "div",
      { className: "queue-title" },
      props.song.title,
      React.createElement(
        "span",
        { className: "now-playing" },
        props.id === 0 ? "(Now Playing)" : ""
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3F1ZXVlRW50cnkuanN4Il0sIm5hbWVzIjpbIlF1ZXVlRW50cnkiLCJwcm9wcyIsImRlcXVldWUiLCJiaW5kIiwiaWQiLCJzb25nIiwiYXJ0aXN0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFJLFNBQVNBLE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixFQUF5QkYsTUFBTUcsRUFBL0IsQ0FBYjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsY0FBZjtBQUNDSCxZQUFNSSxJQUFOLENBQVdDO0FBRFosS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsYUFBZjtBQUNJTCxZQUFNSSxJQUFOLENBQVdFLEtBRGY7QUFFRTtBQUFBO0FBQUEsVUFBTSxXQUFVLGFBQWhCO0FBQWdDTixjQUFNRyxFQUFOLEtBQWEsQ0FBYixHQUFpQixlQUFqQixHQUFtQztBQUFuRTtBQUZGO0FBSkYsR0FEZTtBQUFBLENBQWpCIiwiZmlsZSI6InF1ZXVlRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUXVldWVFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8bGkgb25DbGljaz17cHJvcHMuZGVxdWV1ZS5iaW5kKG51bGwsIHByb3BzLmlkKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWV1ZS1hcnRpc3RcIj5cbiAgICB7cHJvcHMuc29uZy5hcnRpc3R9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWV1ZS10aXRsZVwiPlxuICAgICAgeyBwcm9wcy5zb25nLnRpdGxlIH1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nXCI+eyBwcm9wcy5pZCA9PT0gMCA/IFwiKE5vdyBQbGF5aW5nKVwiIDogXCJcIn08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgPC9saT5cblxuKSJdfQ==