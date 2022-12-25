// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { setWorkouts } from "../actions/workoutActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { deleteWorkout } from "../services/workoutServer";

const WorkoutDetails = ({ workout }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  console.log(user);
  const handleClick = async () => {
    if (!user) return;
    await deleteWorkout(workout._id, user.token);
    dispatch(setWorkouts(user.token));
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
