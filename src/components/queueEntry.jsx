var QueueEntry = (props) => (
  <li onClick={props.dequeue.bind(null, props.id)}>
    <div className="queue-artist">
    {props.song.artist}
    </div>
    <div className="queue-title">
      { props.song.title }
      <span className="now-playing">{ props.id === 0 ? "(Now Playing)" : ""}</span>
    </div>

  </li>

)