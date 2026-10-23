
const exercises = ["Bench Press", "Squats", "Deadlift"];

function Workout() {
  const exercises = ["Bench Press", "Squats", "Deadlift"];

  return (
    <div>
      {exercises.map((exercise) => (
        <p>{exercise}</p>
      ))}
    </div>
  );
}

const workouts = [
  { name: "Bench Press", sets: 4 },
  { name: "Squats", sets: 3 },
  { name: "Deadlift", sets: 4 }
];

function WorkoutList() {
  return (
    <div>
      {workouts.map((workout) => (
        <div key={workout.name}>
          <h3>{workout.name}</h3>
          <p>Sets: {workout.sets}</p>
        </div>
      ))}
    </div>
  );
}

const workoutHistory = useMemo(() => {
  const savedHistory = localStorage.getItem(historyKey);

  if (!savedHistory) {
    return [];
  }

  try {
    const parsedHistory = JSON.parse(savedHistory);

    if (!Array.isArray(parsedHistory)) {
      return [];
    }

    return [...parsedHistory].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } catch {
    return [];
  }
}, [historyKey]);

const totalSeconds = monthlyWorkouts.reduce((total, workout) => {
  return total + Number(workout.duration || 0);
}, 0);


import { useState} from "react";

function Welcome() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);


return (
  <div>
    {isFirstVisit ? (
      <h1>welcome!</h1>
    ):(
      <h1>welcome back!</h1>
    )}.

    <button onClick={() => setIsFirstVisit(false)}>
      continue
    </button>
  </div>
   );
}


const handleTaskKeyDown = (e) => {
  if(e.target.tagName === "BUTTON") {
    e.target.style.color = "red";
  }
}

button.addEventListener("mouseover", handleMouseOver)