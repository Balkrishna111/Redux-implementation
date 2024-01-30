import { removeTodo } from "./app/features/todo/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className='flex justify-between 
           p-4 w-100% rounded-xl bg-gray-700 m-4'
          >
            <h1 className='text-white'>{todo.text}</h1>
            <button
              className='bg-red-600 px-2 rounded-full font-bold'
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
