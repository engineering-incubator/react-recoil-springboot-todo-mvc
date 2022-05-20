import React, { ChangeEvent, KeyboardEventHandler, useState } from "react";

interface Props {
  onSubmit(text: string): void;
}
export default function TodoForm({ onSubmit }: Props) {
  const [value, setValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const onKeyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter") {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
}
