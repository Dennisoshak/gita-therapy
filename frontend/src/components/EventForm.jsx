import { useState } from "react";
import { setEvents } from "../actions/eventActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";

import { postEvent } from "../services/eventServer";

const EventForm = () => {
  const [situation, setSituation] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [emotion, setEmotions] = useState("");
  const [reaction, setREaction] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
  
    const event = { situation, thoughts, emotion, reaction};
    const response = await postEvent(event, user.token);
    if (response?.status === 200) {
      setEmotions("");
      setThoughts("");
      setREaction("");
      setSituation("")
      setError(null);
      setEmptyFields([]);
      dispatch(setEvents(user.token));
    } else if (response?.name === "AxiosError") {
      setError(response.response.data.message);
      setEmptyFields(response.emptyFields);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Event</h3>

      <label>Situation:</label>
      <input
        type="text"
        onChange={(e) => setSituation(e.target.value)}
        value={situation}
        className={emptyFields?.includes("situation") ? "error" : ""}
      />

      <label>Thoughts:</label>
      <input
        type="text"
        onChange={(e) => setThoughts(e.target.value)}
        value={thoughts}
        className={emptyFields?.includes("thoughts") ? "error" : ""}
      />

      <label>Emotions (1-100):</label>
      <input
        type="number"
        onChange={(e) => setEmotions(e.target.value)}
        value={emotion}
        className={emptyFields?.includes("emotion") ? "error" : ""}
      />
      <label>Reaction:</label>
      <input
        type="text"
        onChange={(e) => setREaction(e.target.value)}
        value={reaction}
        className={emptyFields?.includes("reaction") ? "error" : ""}
      />

      <button style={{ width: "130px" }}>Add Event</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EventForm;
