import Modal from "./Modal";
import data from "../../data";

function ModalsWithContext() {
  const { tools, isProficient, toolsUsed } = data;

  const toolList = tools.split(",").map((tool) => tool.trim());
  const toolsUsedArray = toolsUsed.split(",").map(Number);

  return (
    <div className="flex justify-center items-center w-full flex-col pt-[10%]">
      <div className="h-full max-w-full bg-white p-[40px] min-w-[410px]">
        {/* <div>ModalsWithContext</div>

        <h1>Counter: {count}</h1>
        <p>hello</p>

        <Button
          type="primary"
          className="text-primary bg-brand"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button> */}
        <Modal
          toolList={toolList}
          toolsUsedArray={toolsUsedArray}
          isProficientDefault={isProficient}
        />
      </div>
    </div>
  );
}

export default ModalsWithContext;
