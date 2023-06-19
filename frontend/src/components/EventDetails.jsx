// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { setEvents } from "../actions/eventActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { deleteEvent } from "../services/eventServer";


const EventDetails = ({  }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const events = useAppSelector((state) => state.events);
  

  // const handleClick = async () => {
  //   if (!user) return;
  //   await deleteEvent(event._id, user.token);
  //   dispatch(setEvents(user.token));
  // };


  
  return (
    <div className="event-details">
      <table sx={{minWidth:700}}  aria-label="simple table">
        <thead>
          <tr>
            <th align="left"style={{width:"15%"}}>Situation </th>
            <th align="left">Thoughts</th>
            <th align="left">Emotions(1-100)</th>
            <th align="left">Act</th>
            <th align="left">Time</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr
              key={event.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <td component="th" scope="row">
                {event.situation}
              </td>
              <td align="left">{event.thoughts}</td>
              <td align="left">{event.emotion}</td>
              <td align="left"> {event.reaction}</td>
              <td align="left"> {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventDetails;


  // <h4>{event.title}</h4>
  //     <p>
  //       <strong>Load (kg): </strong>
  //       {event.load}
  //     </p>
  //     <p>
  //       <strong>Reps: </strong>
  //       {event.reps}
  //     </p>
  //     <p>
  //       {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}
  //     </p>
  //     <span className="material-symbols-outlined" onClick={handleClick}>
  //       delete
  //     </span>
      