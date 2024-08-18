"use client";

import clsx from "clsx";
import { Task } from "../types/task";

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}: {
  tasks: Task[];
  toggleTask: (id: string, isCompleted: boolean) => void;
  deleteTask: (id: string) => void;
}) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={clsx(
            "flex justify-between items-center p-2",
            task.isCompleted && "line-through text-gray-500"
          )}
        >
          <span
            onClick={() => toggleTask(task.id, task.isCompleted)}
            className="cursor-pointer"
          >
            {task.title}
          </span>
          <button onClick={() => deleteTask(task.id)} className="text-red-500">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
