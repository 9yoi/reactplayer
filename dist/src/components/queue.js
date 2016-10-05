"use strict";

var Queue = function Queue(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " Song Queue "
    ),
    React.createElement(
      "ul",
      null,
      props.queue.map(function (song, i) {
        return React.createElement(QueueEntry, { song: song, id: i, dequeue: props.dequeue });
      })
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3F1ZXVlLmpzeCJdLCJuYW1lcyI6WyJRdWV1ZSIsInByb3BzIiwicXVldWUiLCJtYXAiLCJzb25nIiwiaSIsImRlcXVldWUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNWO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNHQSxZQUFNQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsZUFDaEIsb0JBQUMsVUFBRCxJQUFZLE1BQU1ELElBQWxCLEVBQXdCLElBQUlDLENBQTVCLEVBQStCLFNBQVNKLE1BQU1LLE9BQTlDLEdBRGdCO0FBQUEsT0FBaEI7QUFESDtBQUZGLEdBRFU7QUFBQSxDQUFaIiwiZmlsZSI6InF1ZXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFF1ZXVlID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPiBTb25nIFF1ZXVlIDwvaDE+XG4gICAgPHVsPlxuICAgICAge3Byb3BzLnF1ZXVlLm1hcCgoc29uZywgaSkgPT4gKFxuICAgICAgIDxRdWV1ZUVudHJ5IHNvbmc9e3Nvbmd9IGlkPXtpfSBkZXF1ZXVlPXtwcm9wcy5kZXF1ZXVlfS8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICA8L2Rpdj5cbikiXX0=