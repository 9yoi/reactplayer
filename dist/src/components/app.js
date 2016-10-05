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

    this.dequeueBool = false;
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

  componentDidUpdate: function componentDidUpdate() {
    if (!this.dequeueBool) {
      var lastIndex = this.state.songQueue.length - 1;
      $('.' + lastIndex + '.queue-container').css('display', 'none');
      $('.' + lastIndex + '.queue-container').fadeIn('slow');
    } else {
      this.dequeueBool = false;
    }
  },

  dequeue: function dequeue(index) {
    this.dequeueBool = true;
    var context = this;
    if (index !== 0) {
      $('.' + index + '.queue-container').fadeOut('slow', function () {
        var songQueue = context.state.songQueue;
        songQueue.splice(index, 1);
        context.setState({
          songQueue: songQueue
        });
        //FADE OUT
        $('.' + index + '.queue-container').css('display', 'block');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsImN1cnJlbnRTb25nIiwic29uZ1F1ZXVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZXh0IiwiJCIsIm9uIiwic3RhdGUiLCJuZXdTb25nUXVldWUiLCJzbGljZSIsInNldFN0YXRlIiwibGVuZ3RoIiwiZGVxdWV1ZUJvb2wiLCJjb21wb25lbnRXaWxsTW91bnQiLCJ0b2dnbGVTb25nIiwic29uZyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50RGlkVXBkYXRlIiwibGFzdEluZGV4IiwiY3NzIiwiZmFkZUluIiwiZGVxdWV1ZSIsImluZGV4IiwiZmFkZU91dCIsInNwbGljZSIsInJlbmRlciIsInVybCIsInByb3BzIiwic29uZ3MiLCJSZWFjdERPTSIsInNvbmdEYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFJQSxNQUFNQyxNQUFNQyxXQUFOLENBQW1CO0FBQUE7OztBQUUzQkMsbUJBQWlCLDJCQUFZO0FBQzNCLFdBQU87QUFDTEMsbUJBQWEsRUFEUjtBQUVMQyxpQkFBVztBQUZOLEtBQVA7QUFJRCxHQVAwQjs7QUFTM0I7QUFDQUMscUJBQW1CLDZCQUFXO0FBQzVCLFFBQUlDLFVBQVUsSUFBZDtBQUNBQyxNQUFFLGNBQUYsRUFBa0JDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDdkM7QUFDQSxVQUFJSixZQUFZRSxRQUFRRyxLQUFSLENBQWNMLFNBQTlCO0FBQ0EsVUFBSU0sZUFBZU4sVUFBVU8sS0FBVixDQUFnQixDQUFoQixDQUFuQjtBQUNBTCxjQUFRTSxRQUFSLENBQWlCO0FBQ2ZSLG1CQUFXTSxZQURJO0FBRWZQLHFCQUFhTyxhQUFhRyxNQUFiLEtBQXdCLENBQXhCLEdBQTRCLEVBQTVCLEdBQWlDSCxhQUFhLENBQWI7QUFGL0IsT0FBakI7QUFJQTtBQUNELEtBVEQ7O0FBV0EsU0FBS0ksV0FBTCxHQUFtQixLQUFuQjtBQUNELEdBeEIwQjs7QUEwQjNCO0FBQ0FDLHNCQUFvQiw4QkFBVztBQUM3QjtBQUNELEdBN0IwQjs7QUErQjNCQyxjQUFZLG9CQUFVQyxJQUFWLEVBQWdCO0FBQzFCLFFBQUliLFlBQVksS0FBS0ssS0FBTCxDQUFXTCxTQUEzQjtBQUNBQSxjQUFVYyxJQUFWLENBQWVELElBQWY7QUFDQUUsWUFBUUMsR0FBUixDQUFZaEIsU0FBWjtBQUNBLFNBQUtRLFFBQUwsQ0FBYztBQUNaVCxtQkFBYUMsVUFBVSxDQUFWLENBREQ7QUFFWkEsaUJBQVdBO0FBRkMsS0FBZDtBQUtELEdBeEMwQjs7QUEwQzNCaUIsc0JBQW9CLDhCQUFXO0FBQzdCLFFBQUksQ0FBQyxLQUFLUCxXQUFWLEVBQXVCO0FBQ3JCLFVBQUlRLFlBQVksS0FBS2IsS0FBTCxDQUFXTCxTQUFYLENBQXFCUyxNQUFyQixHQUE0QixDQUE1QztBQUNBTixRQUFFLE1BQU1lLFNBQU4sR0FBa0Isa0JBQXBCLEVBQXdDQyxHQUF4QyxDQUE0QyxTQUE1QyxFQUF1RCxNQUF2RDtBQUNBaEIsUUFBRSxNQUFNZSxTQUFOLEdBQWtCLGtCQUFwQixFQUF3Q0UsTUFBeEMsQ0FBK0MsTUFBL0M7QUFDRCxLQUpELE1BS0s7QUFDSCxXQUFLVixXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRixHQW5EMEI7O0FBcUQzQlcsV0FBUyxpQkFBVUMsS0FBVixFQUFpQjtBQUN4QixTQUFLWixXQUFMLEdBQW1CLElBQW5CO0FBQ0EsUUFBSVIsVUFBVSxJQUFkO0FBQ0EsUUFBSW9CLFVBQVUsQ0FBZCxFQUFpQjtBQUNmbkIsUUFBRSxNQUFNbUIsS0FBTixHQUFjLGtCQUFoQixFQUFvQ0MsT0FBcEMsQ0FBNEMsTUFBNUMsRUFBb0QsWUFBVztBQUM3RCxZQUFJdkIsWUFBWUUsUUFBUUcsS0FBUixDQUFjTCxTQUE5QjtBQUNBQSxrQkFBVXdCLE1BQVYsQ0FBaUJGLEtBQWpCLEVBQXVCLENBQXZCO0FBQ0FwQixnQkFBUU0sUUFBUixDQUFpQjtBQUNmUixxQkFBV0E7QUFESSxTQUFqQjtBQUdBO0FBQ0FHLFVBQUUsTUFBTW1CLEtBQU4sR0FBYyxrQkFBaEIsRUFBb0NILEdBQXBDLENBQXdDLFNBQXhDLEVBQWtELE9BQWxEO0FBQ0QsT0FSRDtBQVVEO0FBQ0YsR0FwRTBCOztBQXNFM0JNLFVBQVEsa0JBQVk7QUFDbEIsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDRSw0QkFBQyxNQUFELElBQVEsS0FBSyxLQUFLcEIsS0FBTCxDQUFXTixXQUFYLENBQXVCMkIsR0FBcEM7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0UsNEJBQUMsT0FBRCxJQUFTLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxLQUEzQixFQUFrQyxZQUFZLEtBQUtoQixVQUFuRDtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFDRSw0QkFBQyxLQUFELElBQU8sT0FBTyxLQUFLUCxLQUFMLENBQVdMLFNBQXpCLEVBQW9DLFNBQVMsS0FBS3FCLE9BQWxEO0FBREY7QUFQRixLQURGO0FBYUQ7QUFwRjBCLENBQW5CLENBQVY7O0FBd0ZBUSxTQUFTSixNQUFULENBQWdCLG9CQUFDLEdBQUQsSUFBSyxPQUFPSyxRQUFaLEdBQWhCLEVBQXlDQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3MgKHtcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFNvbmc6ICcnLFxuICAgICAgc29uZ1F1ZXVlOiBbXVxuICAgIH1cbiAgfSxcblxuICAvL3dvcmtzIGFmdGVyIHRoZSBmaXJzdCByZW5kZXJpbmdcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAkKCcuYXVkaW9QbGF5ZXInKS5vbignZW5kZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vZGVxdWV1ZVxuICAgICAgdmFyIHNvbmdRdWV1ZSA9IGNvbnRleHQuc3RhdGUuc29uZ1F1ZXVlO1xuICAgICAgdmFyIG5ld1NvbmdRdWV1ZSA9IHNvbmdRdWV1ZS5zbGljZSgxKTtcbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICBzb25nUXVldWU6IG5ld1NvbmdRdWV1ZSxcbiAgICAgICAgY3VycmVudFNvbmc6IG5ld1NvbmdRdWV1ZS5sZW5ndGggPT09IDAgPyAnJyA6IG5ld1NvbmdRdWV1ZVswXVxuICAgICAgfSlcbiAgICAgIC8vcGxheSBuZXcgc29uZ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlcXVldWVCb29sID0gZmFsc2U7XG4gIH0sXG4gIFxuICAvL2NyZWF0ZXMgdmFyaWFibGVzIGJlZm9yZSB0aGUgZmlyc3QgbW91bnQgKHJlbmRlcmluZylcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvL3RoaXMuc29uZ1F1ZXVlID0ge31cbiAgfSxcblxuICB0b2dnbGVTb25nOiBmdW5jdGlvbiAoc29uZykge1xuICAgIHZhciBzb25nUXVldWUgPSB0aGlzLnN0YXRlLnNvbmdRdWV1ZTtcbiAgICBzb25nUXVldWUucHVzaChzb25nKTtcbiAgICBjb25zb2xlLmxvZyhzb25nUXVldWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFNvbmc6IHNvbmdRdWV1ZVswXSxcbiAgICAgIHNvbmdRdWV1ZTogc29uZ1F1ZXVlXG4gICAgfSk7XG5cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5kZXF1ZXVlQm9vbCkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IHRoaXMuc3RhdGUuc29uZ1F1ZXVlLmxlbmd0aC0xO1xuICAgICAgJCgnLicgKyBsYXN0SW5kZXggKyAnLnF1ZXVlLWNvbnRhaW5lcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAkKCcuJyArIGxhc3RJbmRleCArICcucXVldWUtY29udGFpbmVyJykuZmFkZUluKCdzbG93Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kZXF1ZXVlQm9vbCA9IGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBkZXF1ZXVlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB0aGlzLmRlcXVldWVCb29sID0gdHJ1ZTtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAkKCcuJyArIGluZGV4ICsgJy5xdWV1ZS1jb250YWluZXInKS5mYWRlT3V0KCdzbG93JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzb25nUXVldWUgPSBjb250ZXh0LnN0YXRlLnNvbmdRdWV1ZTtcbiAgICAgICAgc29uZ1F1ZXVlLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgc29uZ1F1ZXVlOiBzb25nUXVldWVcbiAgICAgICAgfSlcbiAgICAgICAgLy9GQURFIE9VVFxuICAgICAgICAkKCcuJyArIGluZGV4ICsgJy5xdWV1ZS1jb250YWluZXInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgfSk7XG5cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XG4gICAgICAgICAgPFBsYXllciB1cmw9e3RoaXMuc3RhdGUuY3VycmVudFNvbmcudXJsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpYnJhcnlcIj5cbiAgICAgICAgICA8TGlicmFyeSBzb25ncz17dGhpcy5wcm9wcy5zb25nc30gdG9nZ2xlU29uZz17dGhpcy50b2dnbGVTb25nfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXVlXCI+XG4gICAgICAgICAgPFF1ZXVlIHF1ZXVlPXt0aGlzLnN0YXRlLnNvbmdRdWV1ZX0gZGVxdWV1ZT17dGhpcy5kZXF1ZXVlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgc29uZ3M9e3NvbmdEYXRhfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il19