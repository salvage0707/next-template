"use client";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { Task } from "../types/task";
import { addTask, deleteTask, toggleTask } from "@/actions/task";

export default function TasksPageContent({ tasks }: { tasks: Task[] }) {
  const handleAddTask = async (title: string) => {
    await addTask(title);
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
  };

  const handleToggleTask = async (id: string, isCompleted: boolean) => {
    await toggleTask(id, isCompleted);
  };

  return (
    <>
      <TaskForm addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        deleteTask={handleDeleteTask}
        toggleTask={handleToggleTask}
      />
    </>
  );
}
