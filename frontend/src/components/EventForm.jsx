import { useState } from "react";
import { setEvents } from "../actions/eventActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useTranslation } from "react-i18next";
import { postEvent } from "../services/eventServer";
import { t } from "i18next";

const EventForm = () => {
  const [situation, setSituation] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [emotion, setEmotions] = useState("");
  const [reaction, setREaction] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const {t} = useTranslation()


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
    const event = { situation, thoughts, emotion, reaction};
    if (!situation || !thoughts || !emotion || !reaction){ 
      setError(t('missing field'));
    return;
  }
  if (emotion<1||emotion>100) {
    setError(t('emotions range'))
    return
  }
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
      <h3>{t('add new event')}</h3>

      <label>{t("situation")}:</label>
      <input
        type="text"
        onChange={(e) => setSituation(e.target.value)}
        value={situation}
        className={emptyFields?.includes("situation") ? "error" : ""}
      />

      <label>{t("thoughts")}:</label>
      <input
        type="text"
        onChange={(e) => setThoughts(e.target.value)}
        value={thoughts}
        className={emptyFields?.includes("thoughts") ? "error" : ""}
      />

      <label>{t("emotions")} (1-100):</label>
      <input
        type="number"
        onChange={(e) => setEmotions(e.target.value)}
        value={emotion}
        className={emptyFields?.includes("emotion") ? "error" : ""}
      />
      <label>{t("reaction")}:</label>
      <input
        type="text"
        onChange={(e) => setREaction(e.target.value)}
        value={reaction}
        className={emptyFields?.includes("reaction") ? "error" : ""}
      />

      <button style={{ width: "130px" }}>{t("add event")}</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EventForm;
