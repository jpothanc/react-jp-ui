import "./mainStyle.scss";
import { SummaryCard, Tooltip } from ".";
import SummaryContents from "./components/SummaryCard/SummaryContents";
import MdViewerPage from "./pages/MdViewerPage";

const defaultContent = `Some quick example text to build on the card title and make up the
      bulk of the card's content. Some quick example text to build on the
      card title and make up the bulk of the card's content.`;

const App = () => {
  return (
    <>
      <Tooltip text="Hello World">
        <button>Hover over me</button>
      </Tooltip>
      <SummaryContents url="https://api.github.com/repos/jpothanc/jpothanc.github.io/readme" />

      <div className="summary_container">
        <SummaryCard
          title="Data Store"
          link="https://healthcheck-ib.azurewebsites.net/api/v1/health/check"
          body={defaultContent}
          info="https://api.github.com/repos/jpothanc/datastore/readme"
          repo=""
          tech="https://skillicons.dev/icons?i=java,postgres,azure&perline=10"
        />
        <SummaryCard
          title="hero"
          link="https://hero-two-gilt.vercel.app/"
          body={defaultContent}
          info="https://api.github.com/repos/jpothanc/hero/readme"
          repo=""
          tech="https://skillicons.dev/icons?i=react,azure&perline=10"
        />
        <SummaryCard
          title="dynamo"
          link="https://dynamo-blue.vercel.app/"
          body={defaultContent}
          info="https://api.github.com/repos/jpothanc/dynamo/readme"
          repo="https://github.com/jpothanc/dynamo"
          tech="https://skillicons.dev/icons?i=java,azure&perline=10"
        />
      </div>
      <div>
        <MdViewerPage></MdViewerPage>
      </div>
    </>
  );
};

export default App;
