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

  dequeue: function dequeue(index) {
    if (index !== 0) {
      var songQueue = this.state.songQueue;
      songQueue.splice(index, 1);
      this.setState({
        songQueue: songQueue
      });
    }
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
        React.createElement(Queue, { queue: this.state.songQueue, dequeue: this.dequeue })
      )
    );
  }
});

ReactDOM.render(React.createElement(App, { songs: songData }), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsImN1cnJlbnRTb25nIiwic29uZ1F1ZXVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZXh0IiwiJCIsIm9uIiwic3RhdGUiLCJuZXdTb25nUXVldWUiLCJzbGljZSIsInNldFN0YXRlIiwibGVuZ3RoIiwiY29tcG9uZW50V2lsbE1vdW50IiwidG9nZ2xlU29uZyIsInNvbmciLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRlcXVldWUiLCJpbmRleCIsInNwbGljZSIsInJlbmRlciIsInVybCIsInByb3BzIiwic29uZ3MiLCJSZWFjdERPTSIsInNvbmdEYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFJQSxNQUFNQyxNQUFNQyxXQUFOLENBQW1CO0FBQUE7OztBQUUzQkMsbUJBQWlCLDJCQUFZO0FBQzNCLFdBQU87QUFDTEMsbUJBQWEsRUFEUjtBQUVMQyxpQkFBVztBQUZOLEtBQVA7QUFJRCxHQVAwQjs7QUFTM0I7QUFDQUMscUJBQW1CLDZCQUFXO0FBQzVCLFFBQUlDLFVBQVUsSUFBZDtBQUNBQyxNQUFFLGNBQUYsRUFBa0JDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDdkM7QUFDQSxVQUFJSixZQUFZRSxRQUFRRyxLQUFSLENBQWNMLFNBQTlCO0FBQ0EsVUFBSU0sZUFBZU4sVUFBVU8sS0FBVixDQUFnQixDQUFoQixDQUFuQjtBQUNBTCxjQUFRTSxRQUFSLENBQWlCO0FBQ2ZSLG1CQUFXTSxZQURJO0FBRWZQLHFCQUFhTyxhQUFhRyxNQUFiLEtBQXdCLENBQXhCLEdBQTRCLEVBQTVCLEdBQWlDSCxhQUFhLENBQWI7QUFGL0IsT0FBakI7QUFJQTtBQUNELEtBVEQ7QUFVRCxHQXRCMEI7O0FBd0IzQjtBQUNBSSxzQkFBb0IsOEJBQVc7QUFDN0I7QUFDRCxHQTNCMEI7O0FBNkIzQkMsY0FBWSxvQkFBVUMsSUFBVixFQUFnQjtBQUMxQixRQUFJWixZQUFZLEtBQUtLLEtBQUwsQ0FBV0wsU0FBM0I7QUFDQUEsY0FBVWEsSUFBVixDQUFlRCxJQUFmO0FBQ0FFLFlBQVFDLEdBQVIsQ0FBWWYsU0FBWjtBQUNBLFNBQUtRLFFBQUwsQ0FBYztBQUNaVCxtQkFBYUMsVUFBVSxDQUFWLENBREQ7QUFFWkEsaUJBQVdBO0FBRkMsS0FBZDtBQUlELEdBckMwQjs7QUF1QzNCZ0IsV0FBUyxpQkFBVUMsS0FBVixFQUFpQjtBQUN4QixRQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDZixVQUFJakIsWUFBWSxLQUFLSyxLQUFMLENBQVdMLFNBQTNCO0FBQ0FBLGdCQUFVa0IsTUFBVixDQUFpQkQsS0FBakIsRUFBdUIsQ0FBdkI7QUFDQSxXQUFLVCxRQUFMLENBQWM7QUFDWlIsbUJBQVdBO0FBREMsT0FBZDtBQUdEO0FBQ0YsR0EvQzBCOztBQWlEM0JtQixVQUFRLGtCQUFZO0FBQ2xCLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0UsNEJBQUMsTUFBRCxJQUFRLEtBQUssS0FBS2QsS0FBTCxDQUFXTixXQUFYLENBQXVCcUIsR0FBcEM7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0UsNEJBQUMsT0FBRCxJQUFTLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxLQUEzQixFQUFrQyxZQUFZLEtBQUtYLFVBQW5EO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQSxVQUFLLFdBQVUsT0FBZjtBQUNFLDRCQUFDLEtBQUQsSUFBTyxPQUFPLEtBQUtOLEtBQUwsQ0FBV0wsU0FBekIsRUFBb0MsU0FBUyxLQUFLZ0IsT0FBbEQ7QUFERjtBQVBGLEtBREY7QUFhRDtBQS9EMEIsQ0FBbkIsQ0FBVjs7QUFtRUFPLFNBQVNKLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxJQUFLLE9BQU9LLFFBQVosR0FBaEIsRUFBeUNDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyAoe1xuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50U29uZzogJycsXG4gICAgICBzb25nUXVldWU6IFtdXG4gICAgfVxuICB9LFxuXG4gIC8vd29ya3MgYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlcmluZ1xuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICQoJy5hdWRpb1BsYXllcicpLm9uKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgLy9kZXF1ZXVlXG4gICAgICB2YXIgc29uZ1F1ZXVlID0gY29udGV4dC5zdGF0ZS5zb25nUXVldWU7XG4gICAgICB2YXIgbmV3U29uZ1F1ZXVlID0gc29uZ1F1ZXVlLnNsaWNlKDEpO1xuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgIHNvbmdRdWV1ZTogbmV3U29uZ1F1ZXVlLFxuICAgICAgICBjdXJyZW50U29uZzogbmV3U29uZ1F1ZXVlLmxlbmd0aCA9PT0gMCA/ICcnIDogbmV3U29uZ1F1ZXVlWzBdXG4gICAgICB9KVxuICAgICAgLy9wbGF5IG5ldyBzb25nXG4gICAgfSlcbiAgfSxcbiAgXG4gIC8vY3JlYXRlcyB2YXJpYWJsZXMgYmVmb3JlIHRoZSBmaXJzdCBtb3VudCAocmVuZGVyaW5nKVxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vdGhpcy5zb25nUXVldWUgPSB7fVxuICB9LFxuXG4gIHRvZ2dsZVNvbmc6IGZ1bmN0aW9uIChzb25nKSB7XG4gICAgdmFyIHNvbmdRdWV1ZSA9IHRoaXMuc3RhdGUuc29uZ1F1ZXVlO1xuICAgIHNvbmdRdWV1ZS5wdXNoKHNvbmcpO1xuICAgIGNvbnNvbGUubG9nKHNvbmdRdWV1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50U29uZzogc29uZ1F1ZXVlWzBdLFxuICAgICAgc29uZ1F1ZXVlOiBzb25nUXVldWVcbiAgICB9KTtcbiAgfSxcblxuICBkZXF1ZXVlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgIHZhciBzb25nUXVldWUgPSB0aGlzLnN0YXRlLnNvbmdRdWV1ZTtcbiAgICAgIHNvbmdRdWV1ZS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29uZ1F1ZXVlOiBzb25nUXVldWVcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlxuICAgICAgICAgIDxQbGF5ZXIgdXJsPXt0aGlzLnN0YXRlLmN1cnJlbnRTb25nLnVybH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWJyYXJ5XCI+XG4gICAgICAgICAgPExpYnJhcnkgc29uZ3M9e3RoaXMucHJvcHMuc29uZ3N9IHRvZ2dsZVNvbmc9e3RoaXMudG9nZ2xlU29uZ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWV1ZVwiPlxuICAgICAgICAgIDxRdWV1ZSBxdWV1ZT17dGhpcy5zdGF0ZS5zb25nUXVldWV9IGRlcXVldWU9e3RoaXMuZGVxdWV1ZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIHNvbmdzPXtzb25nRGF0YX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyJdfQ==