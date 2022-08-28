import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { countActions } from "../store/count";

const Counter = () => {
  const counter = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.count.show);
  const toggleCounterHandler = () => {
    dispatch(countActions.toggle());
  };

  const onincrement = () => {
    dispatch(countActions.increment(2));
  };
  const ondecrement = () => {
    dispatch(countActions.decrement(1));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onincrement}>Increment</button>
        <button onClick={ondecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
