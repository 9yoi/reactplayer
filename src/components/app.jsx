var App = React.createClass ({
  render: function () {
    return (
      <div className="container">
        <div className="player">
          <Player />
        </div>
        <div className="library">
          <Library />
        </div>
        
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById("app"));