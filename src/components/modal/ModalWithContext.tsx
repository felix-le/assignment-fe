import { Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions/modalActions";

// import Modal from "./Modal";

function ModalsWithContext() {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center w-full h-full flex-col pt-[10%]">
      <div className="h-full max-w-full bg-white p-[40px]">
        <div>ModalsWithContext</div>

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
        {/* <Modal /> */}
      </div>
    </div>
  );
}

export default ModalsWithContext;
