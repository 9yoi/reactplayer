

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
          <Queue queue={this.state.songQueue}/>
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App songs={songData}/>, document.getElementById("app"));