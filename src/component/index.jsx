import { useState } from "react";
import { useReducer } from "react";
// import { useState } from "react";

const Reduser = () => {
  const [data, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "plus":
          return { count: state.count + 1 };
        case "minus":
          return { count: state.count - 1 };
        case "byamount":
          return { count: state.count + action.payload };
        default:
          return state;
      }
    },
    { count: 0 }
  );
  const [amount, setAmount] = useState(5);
  const onSelect = ({ target: { value } }) => {
    setAmount(+value);
  };

  return (
    <div style={{ margin: "50px 100px" }}>
      <h1>Count:{data.count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "byamount", payload: amount })}>
        5
      </button>
      <select name="" id="" onChange={onSelect}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default Reduser;
