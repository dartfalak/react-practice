
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