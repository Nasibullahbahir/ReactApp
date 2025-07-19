function FinishScreen({ points, maxPosiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPosiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎊";
  if (percentage >= 50 && percentage < 80) emoji = "☺️";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "😉";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You second <strong>{points}</strong> out of
        {maxPosiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz{" "}
      </button>
    </>
  );
}
export default FinishScreen;
