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
      props.queue.map(function (song) {
        return React.createElement(QueueEntry, { song: song });
      })
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3F1ZXVlLmpzeCJdLCJuYW1lcyI6WyJRdWV1ZSIsInByb3BzIiwicXVldWUiLCJtYXAiLCJzb25nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDVjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFDR0EsWUFBTUMsS0FBTixDQUFZQyxHQUFaLENBQWdCO0FBQUEsZUFDZixvQkFBQyxVQUFELElBQVksTUFBTUMsSUFBbEIsR0FEZTtBQUFBLE9BQWhCO0FBREg7QUFGRixHQURVO0FBQUEsQ0FBWiIsImZpbGUiOiJxdWV1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBRdWV1ZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT4gU29uZyBRdWV1ZSA8L2gxPlxuICAgIDx1bD5cbiAgICAgIHtwcm9wcy5xdWV1ZS5tYXAoc29uZyA9PiAoXG4gICAgICAgIDxRdWV1ZUVudHJ5IHNvbmc9e3Nvbmd9Lz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKSJdfQ==