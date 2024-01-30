import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./app/features/todo/TodoSlice";

const Todo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className='p-20 h-100% w-100%'>
      <form
        id='form'
        action=''
        onSubmit={handleSubmit}
        className='flex justify-center flex-col items-center'
      >
        <label
          className='text-gray-600 text-xl underline font-bold'
          htmlFor='input'
        >
          Enter your Todo
        </label>
        <div className='flex gap-4 w-full justify-center items-center'>
          <input
            id='input'
            placeholder='Enter Here...'
            className='my-4 w-3/4 p-2 rounded-xl bg-blue-300 border-0 outline-none'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className='bg-yellow-300 px-4 h-10 rounded-xl hover:bg-yellow-200 text-gray-700'
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default Todo;
