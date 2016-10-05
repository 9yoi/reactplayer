

var App = React.createClass ({

  getInitialState: function () {
    return {
      currentSong: '',
      songQueue: []
    }
  },

  //works after the first rendering
  componentDidMount: function() {
    var context = this;
    $('.audioPlayer').on('ended', function() {
      //dequeue
      var songQueue = context.state.songQueue;
      var newSongQueue = songQueue.slice(1);
      context.setState({
        songQueue: newSongQueue,
        currentSong: newSongQueue.length === 0 ? '' : newSongQueue[0]
      })
      //play new song
    })

    this.dequeueBool = false;
  },
  
  //creates variables before the first mount (rendering)
  componentWillMount: function() {
    //this.songQueue = {}
  },

  toggleSong: function (song) {
    var songQueue = this.state.songQueue;
    songQueue.push(song);
    console.log(songQueue);
    this.setState({
      currentSong: songQueue[0],
      songQueue: songQueue
    });

  },

  componentDidUpdate: function() {
    if (!this.dequeueBool) {
      var lastIndex = this.state.songQueue.length-1;
      $('.' + lastIndex + '.queue-container').css('display', 'none');
      $('.' + lastIndex + '.queue-container').fadeIn('slow');
    }
    else {
      this.dequeueBool = false;
    }
  },

  dequeue: function (index) {
    this.dequeueBool = true;
    var context = this;
    if (index !== 0) {
      $('.' + index + '.queue-container').fadeOut('slow', function() {
        var songQueue = context.state.songQueue;
        songQueue.splice(index,1);
        context.setState({
          songQueue: songQueue
        })
        //FADE OUT
        $('.' + index + '.queue-container').css('display','block');
      });

    }
  },

  render: function () {
    return (
      <div className="container">
        <div className="player">
          <Player url={this.state.currentSong.url}/>
        </div>
        <div className="library">
          <Library songs={this.props.songs} toggleSong={this.toggleSong}/>
        </div>
        <div className="queue">
          <Queue queue={this.state.songQueue} dequeue={this.dequeue}/>
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App songs={songData}/>, document.getElementById("app"));