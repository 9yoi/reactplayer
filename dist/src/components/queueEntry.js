"use strict";

var QueueEntry = function QueueEntry(props) {
  return React.createElement(
    "li",
    null,
    React.createElement(
      "div",
      { className: "queue-artist" },
      props.song.artist
    ),
    React.createElement(
      "div",
      { className: "queue-title" },
      props.song.title
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3F1ZXVlRW50cnkuanN4Il0sIm5hbWVzIjpbIlF1ZXVlRW50cnkiLCJwcm9wcyIsInNvbmciLCJhcnRpc3QiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0NBLFlBQU1DLElBQU4sQ0FBV0M7QUFEWixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxhQUFmO0FBQ0NGLFlBQU1DLElBQU4sQ0FBV0U7QUFEWjtBQUpGLEdBRGU7QUFBQSxDQUFqQiIsImZpbGUiOiJxdWV1ZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFF1ZXVlRW50cnkgPSAocHJvcHMpID0+IChcbiAgPGxpPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVldWUtYXJ0aXN0XCI+XG4gICAge3Byb3BzLnNvbmcuYXJ0aXN0fVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVldWUtdGl0bGVcIj5cbiAgICB7cHJvcHMuc29uZy50aXRsZX1cbiAgICA8L2Rpdj5cblxuICA8L2xpPlxuXG4pIl19