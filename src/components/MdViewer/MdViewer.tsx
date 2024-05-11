import "./MdViewerStyles.scss";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import remarkGfm from "remark-gfm";

type Props = {
  content: string;
  height?: number;
  width?: number;
  bgcolor?: string;
  textcolor?: string;
};

const MdViewer = ({ content, height, width, bgcolor, textcolor }: Props) => {
  return (
    <>
      <div
        className="jp_vmd_container"
        style={{
          height: height,
          width: width,
          backgroundColor: bgcolor,
          color: textcolor,
        }}
      >
        <div className="jp_vmd_content">
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
                      style={oneDark}
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
    </>
  );
};

export default MdViewer;
