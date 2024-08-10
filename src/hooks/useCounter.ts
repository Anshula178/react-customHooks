import { useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: "add" | "sub";
}

const initialState = {
  count: 0,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };

    case "sub":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

interface UseCounterReturnType {
  count: number;
  dispatch: React.Dispatch<Action>;
}

export const useCounter = (): UseCounterReturnType => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    count: state.count,
    dispatch,
  };
};
