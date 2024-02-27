import { Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions/modalActions";

function App() {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {count}</h1>
      <p>hello</p>

      <Button
        type="primary"
        className="text-primary bg-brand"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </>
  );
}

export default App;
