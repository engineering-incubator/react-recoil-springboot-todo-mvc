import React from "react";
import { useRecoilState } from "recoil";
import FilterStates from "../states/core/filter-states";

export default function TodoFilter() {
  const [filter, setFilter] = useRecoilState(FilterStates);

  return (
    <ul>
      <li>
        <button
          style={{
            border: "none",
            background: filter === "All" ? "red" : "white",
          }}
          onClick={() => setFilter("All")}
        >
          All
        </button>
      </li>
      <li>
        <button
          style={{
            border: "none",
            background: filter === "Active" ? "red" : "white",
          }}
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          style={{
            border: "none",
            background: filter === "Done" ? "red" : "white",
          }}
          onClick={() => setFilter("Done")}
        >
          Done
        </button>
      </li>
    </ul>
  );
}
