import Contents from "./SummaryContents";
import "./summaryCardStyles.scss";
import Avatar from "react-avatar";
const SummaryCard = () => {
  return (
    <>
      <div className="card">
        <div className="card__body">
          <div className="card__title">
            Data Store
            <Avatar name="Data Store" size="30" round={false} />
          </div>
          <p className="card__text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="card__footer">
            <button className="card__button">Button</button>
          </div>
        </div>
      </div>
      <Contents />
    </>
  );
};

export default SummaryCard;
