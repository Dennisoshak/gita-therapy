import { useEffect } from "react";

// components

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setWorkouts } from "../actions/workoutActions";
// import { useAuth } from "../hooks/usAuth";

const Workouts = () => {
  const dispatch = useAppDispatch();
  const workouts = useAppSelector((state) => state.workouts);
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(setWorkouts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Workouts;
