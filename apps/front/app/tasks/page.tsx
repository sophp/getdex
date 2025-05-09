
import Task from '../../component/task';
export default function Page() {
  const rows= [];
  taskList.forEach((task) => {
    return rows.push(<Task key={task.id} task={task} />);
  });
  return (
    <section>
      <h1>Tasks</h1>
      <div className={'flex flex-col'}>
      {rows}
      </div>
    </section>
  );
}

const taskList = [
  {id: 1, title: 'Task 1'},
  {id: 2, title: 'Task 2'}
];