"use strict";

var QueueEntry = function QueueEntry(props) {
  return React.createElement(
    "li",
    { className: "queue-container " + props.id, onClick: props.dequeue.bind(null, props.id) },
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
        props.id === 0 ? " (Now Playing)" : ""
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3F1ZXVlRW50cnkuanN4Il0sIm5hbWVzIjpbIlF1ZXVlRW50cnkiLCJwcm9wcyIsImlkIiwiZGVxdWV1ZSIsImJpbmQiLCJzb25nIiwiYXJ0aXN0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFJLFdBQVcscUJBQXFCQSxNQUFNQyxFQUExQyxFQUE4QyxTQUFTRCxNQUFNRSxPQUFOLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUJILE1BQU1DLEVBQS9CLENBQXZEO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0NELFlBQU1JLElBQU4sQ0FBV0M7QUFEWixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxhQUFmO0FBQ0lMLFlBQU1JLElBQU4sQ0FBV0UsS0FEZjtBQUVFO0FBQUE7QUFBQSxVQUFNLFdBQVUsYUFBaEI7QUFBZ0NOLGNBQU1DLEVBQU4sS0FBYSxDQUFiLEdBQWlCLGdCQUFqQixHQUFvQztBQUFwRTtBQUZGO0FBSkYsR0FEZTtBQUFBLENBQWpCIiwiZmlsZSI6InF1ZXVlRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUXVldWVFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8bGkgY2xhc3NOYW1lPXtcInF1ZXVlLWNvbnRhaW5lciBcIiArIHByb3BzLmlkfSBvbkNsaWNrPXtwcm9wcy5kZXF1ZXVlLmJpbmQobnVsbCwgcHJvcHMuaWQpfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXVlLWFydGlzdFwiPlxuICAgIHtwcm9wcy5zb25nLmFydGlzdH1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXVlLXRpdGxlXCI+XG4gICAgICB7IHByb3BzLnNvbmcudGl0bGUgfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm93LXBsYXlpbmdcIj57IHByb3BzLmlkID09PSAwID8gXCIgKE5vdyBQbGF5aW5nKVwiIDogXCJcIn08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgPC9saT5cblxuKSJdfQ==