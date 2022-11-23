import { useState } from "react";
import { useReducer } from "react";
// import { useState } from "react";

const Reduser = () => {
  const [selected, setSelect] = useState(0);
  const [data, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "select":
          return { selected: action.payload };
        case "plus":
          return { count: state.count + selected };
        case "minus":
          return { count: state.count - selected };
        default:
          return state;
      }
    },
    { count: 0 }
  );
  console.log(selected);
  return (
    <div style={{ margin: "50px 100px" }}>
      <h1>Count:{data.count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <select
        onChange={(e) =>
          dispatch({ type: "select", payload: setSelect(+e.target.value) })
        }
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default Reduser;
