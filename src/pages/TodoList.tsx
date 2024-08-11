import { useState } from "react";

interface TodoStateType {
  editId: number;
  inputValue: string;
  error: string;
  todoList: { text: string; id: number }[];
}

const TodoList = () => {
  const [{ editId, error, inputValue, todoList }, setState] = useState<TodoStateType>({
    editId: -1,
    inputValue: "",
    error: "",
    todoList: [],
  });

  const isEditMode = editId >= 0;

  const validateInputValue = () => {
    if (inputValue && inputValue.trim()) {
      setState((prev) => ({
        ...prev,
        error: "",
      }));
      return true;
    } else {
      setState((prev) => ({
        ...prev,
        error: "Required",
      }));
      return false;
    }
  };

  const handleInputValue = (inputValue: string) => {
    setState((prev) => ({ ...prev, inputValue }));
  };

  const handleAdd = () => {
    if (!validateInputValue()) return false;

    setState((prev) => ({
      ...prev,
      todoList: [...prev.todoList, { text: prev.inputValue, id: prev.todoList.length }],
      inputValue: "",
      error: "",
    }));
  };

  const handleDelete = (id: number) => {
    setState((prev) => ({ ...prev, todoList: prev.todoList.filter((todo) => todo.id !== id) }));
  };

  const handleEdit = (editId: number, text: string) => {
    setState((prev) => ({ ...prev, editId, inputValue: text, error: "" }));
  };

  const handleUpdate = () => {
    if (!validateInputValue()) return false;
    setState((prev) => ({
      ...prev,
      todoList: prev.todoList.map((todo) => (todo.id === prev.editId ? { ...todo, text: prev.inputValue } : todo)),
      editId: -1,
      inputValue: "",
    }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-[320px] w-full p-2 rounded-md bg-slate-200 shadow-sm space-y-4">
        <h3>Todo List</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={inputValue}
              placeholder="Enter your task"
              className="flex-1 px-2 py-1 rounded-md"
              onChange={(event) => handleInputValue(event.target.value)}
            />

            <button
              className="bg-blue-700 rounded-md px-3 py-1 text-lg"
              onClick={isEditMode ? handleUpdate : handleAdd}
            >
              {isEditMode ? "Update" : "Add"}
            </button>
          </div>

          {error && <p className="text-sm font-medium text-red-800 p-1">{error}</p>}
        </div>
        <div className="space-y-2 min-h-20">
          {todoList.length === 0 ? (
            <p>Nothing for today</p>
          ) : (
            todoList.map(({ text, id }) => (
              <div key={id} className="bg-gray-50 flex items-center gap-2 justify-between rounded-md p-2 text-lg">
                <p className="flex-1">{text} </p>
                <div className="flex items-center gap-1">
                  <button
                    className="bg-red-700 p-2 rounded-md disabled:opacity-10"
                    disabled={id === editId}
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-purple-800 p-2 rounded-md disabled:opacity-10"
                    onClick={() => handleEdit(id, text)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
