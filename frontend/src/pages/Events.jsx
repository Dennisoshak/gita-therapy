import { useEffect, useState } from "react";
import "../styles/Events.css";

import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setEvents } from "../actions/eventActions";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { useAuth } from "../hooks/usAuth";

const Events = () => {
  const [tab, setTab] = useState(1);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const error = useAppSelector((state) => state.error);
  const navigate = useNavigate();

  const validateToken = () => {
    if (error) {
      navigate("/login");
    } else return;
  };
  useEffect(() => {
    if (user) {
      dispatch(setEvents());
    }
    console.log(error);

    validateToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { t,i18n } = useTranslation();
  const direction = i18n.dir();
  return (
    <div className="events" style={{ direction: direction }}>
      <div className="event-tabs">
        <div
          onClick={() => setTab(1)}
          className={tab === 1 ? "tab selected" : "tab"}
        >
          {t('add event')}
        </div>
        <div
          onClick={() => setTab(2)}
          className={tab === 2 ? "tab selected" : "tab"}
        >
        {t('events list')}
        </div>
      </div>
      {tab === 1 ? <EventForm /> : <EventDetails />}
    </div>
  );
};

export default Events;
