import { useEffect } from "react";
import "../styles/Events.css";

// components

import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setEvents } from "../actions/eventActions";
import {useNavigate} from "react-router-dom"
// import { useAuth } from "../hooks/usAuth";

const Events = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const error = useAppSelector((state) => state.error);
  const navigate = useNavigate()



  const validateToken = () =>{
if (error) {
  navigate('/login')
}
else return
  }
  useEffect(() => {
    if (user) {
      dispatch(setEvents());
 
    }
    console.log(error)

    validateToken()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="events">
      <EventForm />

      {/* {events &&
          events.map((event) => (
            <div>
            <EventDetails key={event._id} event={event} />
            </div>
          ))} */}
      <EventDetails />
    </div>
  );
};

export default Events;
