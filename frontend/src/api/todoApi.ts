import requester from "./core/requester";

export const fetchTodoApi = () => requester<Todo[], unknown>("/v1/todos");

interface CreateTodoParams {
  text: string;
}

export const createTodoApi = (data: CreateTodoParams) =>
  requester<Todo, unknown>("/v1/todos", "POST", {
    ...data,
    isDone: false,
  });

export const deleteTodoApi = (id: number) =>
  requester<Todo, unknown>(`/v1/todos/${id}`, "DELETE");

export const updateTodoTextApi = (id: number, text: string) =>
  requester<Todo, unknown>(`/v1/todos/${id}`, "PUT", {
    text,
  });

export const toggleTodoApi = (id: number, isDone: boolean) =>
  requester<Todo, unknown>(`/v1/todos/${id}`, "PUT", {
    isDone,
  });
