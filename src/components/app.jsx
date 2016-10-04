var App = React.createClass ({

  getInitialState: function () {
    return {
      currentSong: ''
    }
  },

  toggleSong: function (url) {
    console.log(url);
    this.setState({currentSong: url});
  },

  render: function () {
    console.log(this.props.songs);
    return (
      <div className="container">
        <div className="player">
          <Player url={this.state.currentSong}/>
        </div>
        <div className="library">
          <Library songs={this.props.songs} toggleSong={this.toggleSong}/>
        </div>
        <div className="queue">
          <Queue />
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App songs={songData}/>, document.getElementById("app"));