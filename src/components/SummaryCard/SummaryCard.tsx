import Contents from "./SummaryContents";
import "./summaryCardStyles.scss";
import Avatar from "react-avatar";
const SummaryCard = () => {
  return (
    <>
      <div className="jp_sc_card">
        <div className="jp_sc_card__body">
          <div className="jp_sc_card__title">
            Data Store
            <Avatar name="Data Store" size="30" round={false} />
          </div>
          <p className="jp_sc_card__text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="jp_sc_card__footer">
            <button className="jp_sc_card__button">Button</button>
          </div>
        </div>
      </div>
      <Contents />
    </>
  );
};

export default SummaryCard;
