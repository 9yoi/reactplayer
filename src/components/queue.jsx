var Queue = (props) => (
  <div>
    <h1> Song Queue </h1>
    <ul>
      {props.queue.map(song => (
       return <QueueEntry song={song}/>
      ))}
    </ul>
  </div>
)