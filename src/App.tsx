import { SummaryCard, Tooltip } from ".";

const App = () => {
  return (
    <>
      <Tooltip text="Hello World">
        <button>Hover over me</button>
      </Tooltip>
      <SummaryCard />
    </>
  );
};

export default App;
