"use strict";

var LibraryEntryView = function LibraryEntryView(props) {

  var clickSong = function clickSong() {
    console.log('clicked');
    props.toggleSong(props.song);
  };

  return React.createElement(
    "li",
    { onClick: clickSong },
    React.createElement(
      "div",
      { className: "library-artist" },
      props.song.artist
    ),
    React.createElement(
      "div",
      { className: "library-title" },
      props.song.title
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xpYnJhcnlFbnRyeS5qc3giXSwibmFtZXMiOlsiTGlicmFyeUVudHJ5VmlldyIsInByb3BzIiwiY2xpY2tTb25nIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZVNvbmciLCJzb25nIiwiYXJ0aXN0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXOztBQUVoQyxNQUFJQyxZQUFZLFNBQVpBLFNBQVksR0FBWTtBQUMxQkMsWUFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQUgsVUFBTUksVUFBTixDQUFpQkosTUFBTUssSUFBdkI7QUFDRCxHQUhEOztBQUtBLFNBQ0E7QUFBQTtBQUFBLE1BQUksU0FBU0osU0FBYjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZ0JBQWY7QUFDQ0QsWUFBTUssSUFBTixDQUFXQztBQURaLEtBREY7QUFJRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFDQ04sWUFBTUssSUFBTixDQUFXRTtBQURaO0FBSkYsR0FEQTtBQVVELENBakJEIiwiZmlsZSI6ImxpYnJhcnlFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBMaWJyYXJ5RW50cnlWaWV3ID0gKHByb3BzKSA9PiB7XG5cbiAgdmFyIGNsaWNrU29uZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgIHByb3BzLnRvZ2dsZVNvbmcocHJvcHMuc29uZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgPGxpIG9uQ2xpY2s9e2NsaWNrU29uZ30+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaWJyYXJ5LWFydGlzdFwiPlxuICAgIHtwcm9wcy5zb25nLmFydGlzdH1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpYnJhcnktdGl0bGVcIj5cbiAgICB7cHJvcHMuc29uZy50aXRsZX1cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiAgKVxufSJdfQ==