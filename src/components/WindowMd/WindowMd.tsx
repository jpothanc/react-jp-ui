import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import "./windowMdStyles.scss";
import { Tooltip } from "../..";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type Props = {
  title: string;
  content: string;
  height?: number;
  width?: number;
  bgcolor?: string;
};

export interface WindowMdRef {
  open: () => void;
  close: () => void;
}

const WindowMd = forwardRef(
  (
    { title, content, height, width, bgcolor }: Props,
    ref: Ref<WindowMdRef>
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleShow = () => {
      setIsVisible(true);
    };
    const handleClose = () => {
      setIsVisible(false);
    };

    useImperativeHandle(ref, () => ({
      open: handleShow,
      close: handleClose,
    }));

    return (
      <>
        <div className={`overlay ${isVisible ? "visible" : ""}`}>
          <div
            className="jp_wmd_container"
            style={{
              height: height,
              width: width,
              backgroundColor: bgcolor,
            }}
          >
            <div className="jp_wmd_title">
              <div className="jp_wmd_title__text">{title}</div>

              <Tooltip text="Close">
                <div className="jp_wmd_title__icon" onClick={handleClose}>
                  X
                </div>
              </Tooltip>
            </div>
            <div className="jp_wmd_content">
              <div className="markdown-content">
                <Markdown
                  children={content}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code(props) {
                      const { children, className, node, ...rest } = props;
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          PreTag="div"
                          language={match[1]}
                          style={materialDark}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      );
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default WindowMd;
