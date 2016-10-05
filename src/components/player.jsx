var Player = React.createClass({
  render: function() {
    return (
      <audio className="audioPlayer" controls autoPlay src={this.props.url}/>
    )
  }
  
});
