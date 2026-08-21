const appName = 'TaskTracker';
const taskCount = 0;

function addTask() {
  let taskCount = 0; // shadows the outer const, reassigned below so it needs let
  taskCount = taskCount + 1;
  return taskCount;
}
