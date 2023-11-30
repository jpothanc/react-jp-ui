import "./mainStyle.scss";
import { SummaryCard, Tooltip } from ".";
import SummaryContents from "./components/SummaryCard/SummaryContents";

const App = () => {
  return (
    <>
      <Tooltip text="Hello World">
        <button>Hover over me</button>
      </Tooltip>
      <SummaryContents />

      <div className="summary_container">
        <SummaryCard title="Data Store" />
        <SummaryCard title="Product Store" />
        <SummaryCard title="Health Check" />
      </div>
    </>
  );
};

export default App;
