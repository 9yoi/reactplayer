var QueueEntry = (props) => (
  <li>
    <div className="queue-artist">
    {props.song.artist}
    </div>
    <div className="queue-title">
    {props.song.title}
    </div>

  </li>

)