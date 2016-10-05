'use strict';

var App = React.createClass({
  displayName: 'App',


  getInitialState: function getInitialState() {
    return {
      currentSong: '',
      songQueue: []
    };
  },

  //works after the first rendering
  componentDidMount: function componentDidMount() {
    var context = this;
    $('.audioPlayer').on('ended', function () {
      //dequeue
      var songQueue = context.state.songQueue;
      var newSongQueue = songQueue.slice(1);
      context.setState({
        songQueue: newSongQueue,
        currentSong: newSongQueue.length === 0 ? '' : newSongQueue[0]
      });

      //play new song
    });
  },

  //creates variables before the first mount (rendering)
  componentWillMount: function componentWillMount() {
    //this.songQueue = {}
  },

  toggleSong: function toggleSong(song) {
    var songQueue = this.state.songQueue;
    songQueue.push(song);
    console.log(songQueue);
    this.setState({
      currentSong: songQueue[0],
      songQueue: songQueue
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'player' },
        React.createElement(Player, { url: this.state.currentSong.url })
      ),
      React.createElement(
        'div',
        { className: 'library' },
        React.createElement(Library, { songs: this.props.songs, toggleSong: this.toggleSong })
      ),
      React.createElement(
        'div',
        { className: 'queue' },
        React.createElement(Queue, { queue: this.state.songQueue })
      )
    );
  }
});

ReactDOM.render(React.createElement(App, { songs: songData }), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsImN1cnJlbnRTb25nIiwic29uZ1F1ZXVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZXh0IiwiJCIsIm9uIiwic3RhdGUiLCJuZXdTb25nUXVldWUiLCJzbGljZSIsInNldFN0YXRlIiwibGVuZ3RoIiwiY29tcG9uZW50V2lsbE1vdW50IiwidG9nZ2xlU29uZyIsInNvbmciLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInVybCIsInByb3BzIiwic29uZ3MiLCJSZWFjdERPTSIsInNvbmdEYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFJQSxNQUFNQyxNQUFNQyxXQUFOLENBQW1CO0FBQUE7OztBQUUzQkMsbUJBQWlCLDJCQUFZO0FBQzNCLFdBQU87QUFDTEMsbUJBQWEsRUFEUjtBQUVMQyxpQkFBVztBQUZOLEtBQVA7QUFJRCxHQVAwQjs7QUFTM0I7QUFDQUMscUJBQW1CLDZCQUFXO0FBQzVCLFFBQUlDLFVBQVUsSUFBZDtBQUNBQyxNQUFFLGNBQUYsRUFBa0JDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDdkM7QUFDQSxVQUFJSixZQUFZRSxRQUFRRyxLQUFSLENBQWNMLFNBQTlCO0FBQ0EsVUFBSU0sZUFBZU4sVUFBVU8sS0FBVixDQUFnQixDQUFoQixDQUFuQjtBQUNBTCxjQUFRTSxRQUFSLENBQWlCO0FBQ2ZSLG1CQUFXTSxZQURJO0FBRWZQLHFCQUFhTyxhQUFhRyxNQUFiLEtBQXdCLENBQXhCLEdBQTRCLEVBQTVCLEdBQWlDSCxhQUFhLENBQWI7QUFGL0IsT0FBakI7O0FBS0E7QUFDRCxLQVZEO0FBV0QsR0F2QjBCOztBQXlCM0I7QUFDQUksc0JBQW9CLDhCQUFXO0FBQzdCO0FBQ0QsR0E1QjBCOztBQThCM0JDLGNBQVksb0JBQVVDLElBQVYsRUFBZ0I7QUFDMUIsUUFBSVosWUFBWSxLQUFLSyxLQUFMLENBQVdMLFNBQTNCO0FBQ0FBLGNBQVVhLElBQVYsQ0FBZUQsSUFBZjtBQUNBRSxZQUFRQyxHQUFSLENBQVlmLFNBQVo7QUFDQSxTQUFLUSxRQUFMLENBQWM7QUFDWlQsbUJBQWFDLFVBQVUsQ0FBVixDQUREO0FBRVpBLGlCQUFXQTtBQUZDLEtBQWQ7QUFJRCxHQXRDMEI7O0FBd0MzQmdCLFVBQVEsa0JBQVk7QUFDbEIsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDRSw0QkFBQyxNQUFELElBQVEsS0FBSyxLQUFLWCxLQUFMLENBQVdOLFdBQVgsQ0FBdUJrQixHQUFwQztBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRSw0QkFBQyxPQUFELElBQVMsT0FBTyxLQUFLQyxLQUFMLENBQVdDLEtBQTNCLEVBQWtDLFlBQVksS0FBS1IsVUFBbkQ7QUFERixPQUpGO0FBT0U7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQ0UsNEJBQUMsS0FBRCxJQUFPLE9BQU8sS0FBS04sS0FBTCxDQUFXTCxTQUF6QjtBQURGO0FBUEYsS0FERjtBQWFEO0FBdEQwQixDQUFuQixDQUFWOztBQTBEQW9CLFNBQVNKLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxJQUFLLE9BQU9LLFFBQVosR0FBaEIsRUFBeUNDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyAoe1xuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50U29uZzogJycsXG4gICAgICBzb25nUXVldWU6IFtdXG4gICAgfVxuICB9LFxuXG4gIC8vd29ya3MgYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlcmluZ1xuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICQoJy5hdWRpb1BsYXllcicpLm9uKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgLy9kZXF1ZXVlXG4gICAgICB2YXIgc29uZ1F1ZXVlID0gY29udGV4dC5zdGF0ZS5zb25nUXVldWU7XG4gICAgICB2YXIgbmV3U29uZ1F1ZXVlID0gc29uZ1F1ZXVlLnNsaWNlKDEpO1xuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgIHNvbmdRdWV1ZTogbmV3U29uZ1F1ZXVlLFxuICAgICAgICBjdXJyZW50U29uZzogbmV3U29uZ1F1ZXVlLmxlbmd0aCA9PT0gMCA/ICcnIDogbmV3U29uZ1F1ZXVlWzBdXG4gICAgICB9KVxuXG4gICAgICAvL3BsYXkgbmV3IHNvbmdcbiAgICB9KVxuICB9LFxuICBcbiAgLy9jcmVhdGVzIHZhcmlhYmxlcyBiZWZvcmUgdGhlIGZpcnN0IG1vdW50IChyZW5kZXJpbmcpXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy90aGlzLnNvbmdRdWV1ZSA9IHt9XG4gIH0sXG5cbiAgdG9nZ2xlU29uZzogZnVuY3Rpb24gKHNvbmcpIHtcbiAgICB2YXIgc29uZ1F1ZXVlID0gdGhpcy5zdGF0ZS5zb25nUXVldWU7XG4gICAgc29uZ1F1ZXVlLnB1c2goc29uZyk7XG4gICAgY29uc29sZS5sb2coc29uZ1F1ZXVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRTb25nOiBzb25nUXVldWVbMF0sXG4gICAgICBzb25nUXVldWU6IHNvbmdRdWV1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlxuICAgICAgICAgIDxQbGF5ZXIgdXJsPXt0aGlzLnN0YXRlLmN1cnJlbnRTb25nLnVybH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWJyYXJ5XCI+XG4gICAgICAgICAgPExpYnJhcnkgc29uZ3M9e3RoaXMucHJvcHMuc29uZ3N9IHRvZ2dsZVNvbmc9e3RoaXMudG9nZ2xlU29uZ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWV1ZVwiPlxuICAgICAgICAgIDxRdWV1ZSBxdWV1ZT17dGhpcy5zdGF0ZS5zb25nUXVldWV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBzb25ncz17c29uZ0RhdGF9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiXX0=