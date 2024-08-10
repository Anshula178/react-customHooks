import "./App.css";
import Button from "./Components/Button";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { count, dispatch } = useCounter();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-50 w-1/2 space-y-3 text-center">
        <p>{count}</p>
        <div className="flex items-center">
          <div className="flex gap-2 mx-auto">
            <Button text="Add" disabled={count > 10} onClick={() => dispatch({ type: "add" })} />
            <Button text="Sub" buttonType="secondary" disabled={count < 1} onClick={() => dispatch({ type: "sub" })} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
