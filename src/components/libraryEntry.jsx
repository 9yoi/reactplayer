var LibraryEntryView = (props) => {

  var clickSong = function () {
    console.log('clicked');
    props.toggleSong(props.song.url);
  };

  return (
  <li onClick={clickSong}>
    <div className="library-artist">
    {props.song.artist}
    </div>
    <div className="library-title">
    {props.song.title}
    </div>
  </li>
  )
}