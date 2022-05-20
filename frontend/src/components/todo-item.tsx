import React, {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  todo: Todo;
  onCheck(checked: boolean): void;
  onDelete(id: number): void;
  onUpdate(id: number, text: string): void;
}

export default function TodoItem({ todo, onCheck, onDelete, onUpdate }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editableText, setEditableText] = useState("");
  const [editable, toggleEditable] = useState(false);

  const onToggleHandler = () => onCheck(!todo.isDone);
  const onDoubleClickHandler = () => toggleEditable(!editable);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setEditableText(e.currentTarget.value);
  const onBlurHandler = () => {
    setEditableText("");
    toggleEditable(false);
  };
  const onKeyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter") {
      onUpdate(todo.id, editableText);
      setEditableText("");
      toggleEditable(false);
    }
  };

  useEffect(() => {
    if (editable) {
      setEditableText(todo.text);
      inputRef.current?.focus();
    }
  }, [editable, todo]);

  return (
    <div onDoubleClick={onDoubleClickHandler}>
      {editable && (
        <input
          ref={inputRef}
          type="text"
          value={editableText}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onKeyDown={onKeyDownHandler}
        />
      )}
      {!editable && (
        <div>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={onToggleHandler}
          />
          {todo.text}
          <input type="button" onClick={() => onDelete(todo.id)} value="삭제" />
        </div>
      )}
    </div>
  );
}
