import "./summaryCardStyles.scss";
import Avatar from "react-avatar";
import { FaSquareGit } from "react-icons/fa6";
// import { TbArrowsMaximize } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import WindowMd, { WindowMdRef } from "../WindowMd/WindowMd";
import { CiMenuKebab } from "react-icons/ci";
type Props = {
  title: string;
  content?: string;
  height?: number;
  width?: number;
  bgcolor?: string;
};

const SummaryCard = ({ title }: Props) => {
  const modalRef = useRef<WindowMdRef | null>(null);
  const [readmeContent, setReadmeContent] = useState("");
  useEffect(() => {
    console.log("useEffect");
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/jpothanc/jpothanc.github.io/readme"
        );
        const readmeData = await response.json();

        // Fetch raw content of README.md using download_url
        const readmeResponse = await fetch(readmeData.download_url);
        const text = await readmeResponse.text();
        console.log(text);
        setReadmeContent(text);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();

    return () => {};
  }, []);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };
  return (
    <>
      <div className="jp_sc_card">
        <div className="jp_sc_card__body">
          <div className="jp_sc_card__title">
            <div className="jp_sc_card__title__logo">
              <Avatar name={title} size="24" round={false} />
            </div>
            <div className="jp_sc_card__title__text">{title}</div>
            <div className="jp_sc_card__title_right" onClick={handleOpenModal}>
              <FaSquareGit size="24" />
              <CiMenuKebab size="24" />
            </div>
          </div>
          <hr></hr>
          <p className="jp_sc_card__body__text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content.
          </p>
          <div className="jp_sc_card__footer">
            <div className="jp_sc_card__footer__text">Technologies</div>
            <div className="jp_sc_card__footer__icon">
              <img
                src="https://skillicons.dev/icons?i=java,azure&perline=10"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>
      </div>
      <WindowMd
        title="This is a title"
        content={readmeContent}
        ref={modalRef}
      />
    </>
  );
};

export default SummaryCard;
