import "./App.css";
import { useCounter } from "@src/hooks/useCounter";
import Button from "@src/Components/Button";

function App() {
  const { count, dispatch } = useCounter();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-50 w-1/3 space-y-3 text-center">
        <p>{count}</p>
        <div className="flex items-center">
          <div className="flex gap-2 mx-auto">
            <Button text="Plus" disabled={count > 10} onClick={() => dispatch({ type: "add" })} />
            <Button text="-" buttonType="secondary" disabled={count < 1} onClick={() => dispatch({ type: "sub" })} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
