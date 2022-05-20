import { atom } from "recoil";

export default atom<Todo[]>({
  key: "todos",
  default: [],
});
