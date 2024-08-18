import { getTasks } from "../actions/task";
import TasksPageContent from "@/components/TasksPageContent";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
      <TasksPageContent tasks={tasks} />
    </div>
  );
}
