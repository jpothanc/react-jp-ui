import { useEffect, useRef, useState } from "react";
import "./summaryCardStyles.scss";
import Window, { WindowMdRef } from "../WindowMd/WindowMd";

type Props = {
  url: string;
};

const SummaryContents = ({ url }: Props) => {
  const modalRef = useRef<WindowMdRef | null>(null);

  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    console.log("useEffect");
    const fetchReadme = async () => {
      try {
        const response = await fetch(url);
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
      <div className="container">
        <button onClick={handleOpenModal}>Toggle Content</button>
        <Window
          title="This is a title"
          content={readmeContent}
          height={300}
          ref={modalRef}
          bgcolor="#004d40"
        />
      </div>
    </>
  );
};

export default SummaryContents;
