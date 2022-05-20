import { selector } from "recoil";
import filterStates from "./core/filter-states";
import todoStates from "./core/todo-states";

export default selector<Todo[]>({
  key: "computedTodoStates",
  get: async ({ get }) => {
    const todos = get(todoStates);
    const filter = get(filterStates);

    switch (filter) {
      case "All":
        return todos;
      case "Active":
        return todos.filter(({ isDone }) => !isDone);
      case "Done":
        return todos.filter(({ isDone }) => isDone);
      default:
        return todos;
    }
  },
});
