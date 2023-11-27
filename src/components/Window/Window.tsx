import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import "./windowStyles.scss";
import { Tooltip } from "../..";

type Props = {
  title: string;
  content: string;
  height?: number;
  width?: number;
};

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Window = forwardRef(
  ({ title, content, height, width }: Props, ref: Ref<ModalRef>) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleShow = () => setIsVisible(true);
    const handleClose = () => setIsVisible(false);

    useImperativeHandle(ref, () => ({
      open: handleShow,
      close: handleClose,
    }));

    return (
      <>
        <div className={`overlay ${isVisible ? "visible" : ""}`}>
          <div
            className="window-container"
            style={{
              height: height,
              width: width,
            }}
          >
            <div className="window-title">
              <div className="window-title__text">{title}</div>

              <Tooltip text="Close">
                <div className="window-title__icon" onClick={handleClose}>
                  X
                </div>
              </Tooltip>
            </div>
            <div className="window-content">
              <p>{content}</p>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default Window;
