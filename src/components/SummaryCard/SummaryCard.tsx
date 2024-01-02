import "./summaryCardStyles.scss";
import Avatar from "react-avatar";
import { FaSquareGit, FaLink } from "react-icons/fa6";
// import { TbArrowsMaximize } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import WindowMd, { WindowMdRef } from "../WindowMd/WindowMd";
import { CiMenuKebab } from "react-icons/ci";

type Props = {
  title: string;
  link: string;
  body: string;
  tech: string;
  repo: string;
  info: string;
  height?: number;
  width?: number;
  bgcolor?: string;
};

const SummaryCard = ({ title, link, body, tech, repo, info }: Props) => {
  const modalRef = useRef<WindowMdRef | null>(null);
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(info);
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
              <Avatar name={title} size="22" round={false} />
            </div>
            <div className="jp_sc_card__title__text">{title}</div>
            <div className="jp_sc_card__title_right">
              <a href={link} target="_blank" className="jp_sc_link">
                <FaLink size="16" />
              </a>
              <a href={repo} target="_blank" className="jp_sc_link">
                <FaSquareGit size="16" />
              </a>
              <CiMenuKebab size="16" onClick={handleOpenModal} />
            </div>
          </div>
          <hr></hr>
          <p className="jp_sc_card__body__text">{body}</p>
          <div className="jp_sc_card__footer">
            <div className="jp_sc_card__footer__text">Technologies</div>
            <div className="jp_sc_card__footer__icon">
              <img src={tech} height="20" />
            </div>
          </div>
        </div>
      </div>
      <WindowMd title={title} content={readmeContent} ref={modalRef} />
    </>
  );
};

export default SummaryCard;
