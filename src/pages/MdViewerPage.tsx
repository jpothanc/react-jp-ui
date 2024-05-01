import { useEffect, useState } from "react";
import ButtonMenuList from "../components/ButtonMenu/ButtonMenuList";
import MdViewer from "../components/MdViewer/MdViewer";

type mdContent = {
  url: string | undefined;
  content: string;
};

const MdViewerPage = () => {
  const [mdContent, setMdContent] = useState<mdContent>({
    url: "",
    content: "",
  });

  useEffect(() => {
    if (mdContent.url == undefined) return;

    fetch(mdContent.url)
      .then((response) => response.text())
      .then((text) => setMdContent({ ...mdContent, content: text }));
  }, [mdContent.url]);
  return (
    <>
      <div>
        <ButtonMenuList
          items={[
            {
              name: "web-styling-containers",
              description: "flex,grids,etc",
              link: "https://raw.githubusercontent.com/jpothanc/developer-notes/main/web-styling/css/css_containers.md",
            },
            {
              name: "web-styling-layout-hacks",
              description: "quick useful css layout hacks",
              link: "https://raw.githubusercontent.com/jpothanc/developer-notes/main/Azure/Cheat-Sheet.md",
            },
            { name: "test me" },
            { name: "test me" },
            { name: "test me" },
            { name: "test me" },
            { name: "test me" },
          ]}
          onClick={(value) => {
            if (value.link == mdContent.url) return;
            setMdContent({ url: value.link, content: "" });
            console.log(value.link);
          }}
        />
        <MdViewer content={mdContent.content} />
      </div>
    </>
  );
};

export default MdViewerPage;
