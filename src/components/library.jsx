var Library = React.createClass ({
  render: function () {
    return (
     <div>
        <h1> Library </h1>
        <ul>
        {this.props.songs.map(song => {
          return <LibraryEntryView song={song} toggleSong={this.props.toggleSong}/>
        })}
        </ul>
      </div>
    );
  }
});
