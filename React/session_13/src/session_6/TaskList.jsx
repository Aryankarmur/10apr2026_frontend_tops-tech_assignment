import React from "react";

const TaskList = () => {
  const taskList = [
   {id:1, task:"wash mouth"},
   {id:2, task:"feed dog"},
   {id:3, task:"wash cloths"},
   {id:4, task:"do yoga"},
   {id:5, task:"drink water properly"},
  ];
  return (
    <div>
      <h1>Task List</h1>

      <ol>
        {taskList.length > 0 ? (
          taskList.map((t) => {
            return <li key={t.id}>{t.task}</li>;
          })
        ) : (
          <p>No task found</p>
        )}
      </ol>
    </div>
  );
};

export default TaskList;
