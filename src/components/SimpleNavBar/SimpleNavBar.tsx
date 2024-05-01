import { WindowMd, WindowMdRef } from "react-jp-ui";
import { useEffect, useRef, useState } from "react";
import { GoShare } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

type Props = {
  appName: string;
  readme: string;
};

const SimpleNavBar = ({ appName, readme }: Props) => {
  const [about, setAbout] = useState<string>("");
  const modalRef = useRef<WindowMdRef | null>(null);
  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  useEffect(() => {
    fetch(readme)
      .then((response) => response.text())
      .then((text) => setAbout(text));

    return () => {};
  }, []);

  return (
    <>
      <div className="jp_simple_navbar">
        <div className="jp_simple_navbar__logo">{appName}</div>
        <div className="jp_simple_navbar__menu">
          <div>
            <GoShare className="jp_simple_navbar__menu-item" />
          </div>
          <div onClick={handleOpenModal}>
            <IoMenu size="24" className="jp_simple_navbar__menu-item" />
          </div>
        </div>

        <WindowMd title="" content={about} bgcolor="#212121" ref={modalRef} />
      </div>
    </>
  );
};

export default SimpleNavBar;
