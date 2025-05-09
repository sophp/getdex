
export default function Task({task}) {
  return (
    <div className={'taskItem rounded-xl'}>
      <h3>{task.title}</h3>
      <br/>
      <p>{task.id}</p>
    </div>
  );
}
