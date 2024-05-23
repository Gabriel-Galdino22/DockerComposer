import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
