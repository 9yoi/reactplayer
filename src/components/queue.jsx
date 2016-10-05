var Queue = (props) => (
  <div>
    <h1> Song Queue </h1>
    <ul>
      {props.queue.map((song, i) => (
       <QueueEntry song={song} id={i} dequeue={props.dequeue}/>
      ))}
    </ul>
  </div>
)