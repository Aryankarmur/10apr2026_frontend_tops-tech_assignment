import useCurrentTime from "../hooks/useCurrentTime";

function Clock() {
  const time = useCurrentTime();

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;