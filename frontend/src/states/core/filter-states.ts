import { atom } from "recoil";

export default atom<Filter>({
  key: "filter",
  default: "All",
});
