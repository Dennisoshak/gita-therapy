// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { setWorkouts } from "../actions/workoutActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { deleteWorkout } from "../services/workoutServer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const WorkoutDetails = ({  }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const workouts = useAppSelector((state) => state.workouts);
  

  // const handleClick = async () => {
  //   if (!user) return;
  //   await deleteWorkout(workout._id, user.token);
  //   dispatch(setWorkouts(user.token));
  // };


  

  return (
    <div className="workout-details">
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
          {workouts.map((workout) => (
            <tr
              key={workout.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <td component="th" scope="row">
                {workout.title}
              </td>
              <td align="left">{workout.load}</td>
              <td align="left">{workout.load}</td>
              <td align="left"> name</td>
              <td align="left"> {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutDetails;


  // <h4>{workout.title}</h4>
  //     <p>
  //       <strong>Load (kg): </strong>
  //       {workout.load}
  //     </p>
  //     <p>
  //       <strong>Reps: </strong>
  //       {workout.reps}
  //     </p>
  //     <p>
  //       {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
  //     </p>
  //     <span className="material-symbols-outlined" onClick={handleClick}>
  //       delete
  //     </span>
      