import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count); // Akses nilai count dari Redux state
  const dispatch = useDispatch(); // Mendapatkan fungsi dispatch

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <p className="text-4xl font-semibold mb-4">{count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
