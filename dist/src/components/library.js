"use strict";

var Library = React.createClass({
  displayName: "Library",

  render: function render() {
    var _this = this;

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        " Library "
      ),
      React.createElement(
        "ul",
        null,
        this.props.songs.map(function (song) {
          return React.createElement(LibraryEntryView, { song: song, toggleSong: _this.props.toggleSong });
        })
      )
    );
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xpYnJhcnkuanN4Il0sIm5hbWVzIjpbIkxpYnJhcnkiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwicmVuZGVyIiwicHJvcHMiLCJzb25ncyIsIm1hcCIsInNvbmciLCJ0b2dnbGVTb25nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLE1BQU1DLFdBQU4sQ0FBbUI7QUFBQTs7QUFDL0JDLFVBQVEsa0JBQVk7QUFBQTs7QUFDbEIsV0FDQztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREg7QUFFRztBQUFBO0FBQUE7QUFDQyxhQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLGdCQUFRO0FBQzVCLGlCQUFPLG9CQUFDLGdCQUFELElBQWtCLE1BQU1DLElBQXhCLEVBQThCLFlBQVksTUFBS0gsS0FBTCxDQUFXSSxVQUFyRCxHQUFQO0FBQ0QsU0FGQTtBQUREO0FBRkgsS0FERDtBQVVEO0FBWjhCLENBQW5CLENBQWQiLCJmaWxlIjoibGlicmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBMaWJyYXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3MgKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPGRpdj5cbiAgICAgICAgPGgxPiBMaWJyYXJ5IDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAge3RoaXMucHJvcHMuc29uZ3MubWFwKHNvbmcgPT4ge1xuICAgICAgICAgIHJldHVybiA8TGlicmFyeUVudHJ5VmlldyBzb25nPXtzb25nfSB0b2dnbGVTb25nPXt0aGlzLnByb3BzLnRvZ2dsZVNvbmd9Lz5cbiAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbiJdfQ==