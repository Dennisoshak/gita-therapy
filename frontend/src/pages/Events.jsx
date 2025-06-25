import { useEffect, useState } from "react";
import "../styles/Events.css";

import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setEvents } from "../actions/eventActions";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/usAuth";
import { useTranslation } from "react-i18next";
// import { useAuth } from "../hooks/usAuth";

const Events = () => {
  useAuth();
  const [tab, setTab] = useState(2);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const error = useAppSelector((state) => state.error);
  const language = useAppSelector((state) => state.language);
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
  }, []);

  const { t, i18n } = useTranslation();
  const direction = i18n.dir();
  return (
    <div className="events" style={{ direction: language.direction }}>
      <div className="event-tabs" role="tablist">
        <div
          role="tab"
          tabIndex={0}
          aria-selected={tab === 2}
          className={tab === 2 ? "tab selected" : "tab"}
          onClick={() => setTab(2)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setTab(2)}
        >
          <span
            className="tab-icon"
            aria-hidden="true"
            style={{ marginRight: "0.5em", verticalAlign: "middle" }}
          >
            {/* List icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="6"
                width="12"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="4"
                y="12"
                width="12"
                height="2"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </span>
          {t("events list")}
        </div>
        <div
          role="tab"
          tabIndex={0}
          aria-selected={tab === 1}
          className={tab === 1 ? "tab selected" : "tab"}
          onClick={() => setTab(1)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setTab(1)}
        >
          <span
            className="tab-icon"
            aria-hidden="true"
            style={{ marginRight: "0.5em", verticalAlign: "middle" }}
          >
            {/* Plus (add) icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8.25"
                y="3.5"
                width="3.5"
                height="13"
                rx="1.75"
                fill="currentColor"
              />
              <rect
                x="3.5"
                y="11.75"
                width="13"
                height="3.5"
                rx="1.75"
                fill="currentColor"
              />
            </svg>
          </span>
          {t("add event")}
        </div>
      </div>
      <div className="tab-content-fade">
        {tab === 1 ? <EventForm /> : <EventDetails />}
      </div>
    </div>
  );
};

export default Events;
