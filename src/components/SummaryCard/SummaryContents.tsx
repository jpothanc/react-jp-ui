import { useRef } from "react";
import "./summaryCardStyles.scss";
import Window, { ModalRef } from "../Window/Window";

const SummaryContents = () => {
  const modalRef = useRef<ModalRef | null>(null);
  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  return (
    <>
      <div className="container">
        <button onClick={handleOpenModal}>Toggle Content</button>
        <Window
          title="This is a title"
          content="This content appears from the bottom to the middle!"
          height={300}
          ref={modalRef}
        />
      </div>
    </>
  );
};

export default SummaryContents;
