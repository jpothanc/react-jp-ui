import { useEffect, useState } from "react";
import ButtonMenuList from "../components/ButtonMenu/ButtonMenuList";
import MdViewer from "../components/MdViewer/MdViewer";
import SimpleNavBar from "../components/SimpleNavBar/SimpleNavBar";

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
      <SimpleNavBar
        appName="MdViewerPage"
        aboutUrl="https://raw.githubusercontent.com/jpothanc/devnotes/main/README.md"
      />
      <div>
        <ButtonMenuList
          items={[
            {
              name: "web-styling-containers",
              description: "flex,grids,etc",
              link: "https://raw.githubusercontent.com/jpothanc/developer-notes/main/web-styling/css/css_containers.md",
            },
            {
              name: "java-collections",
              description: "java collections",
              link: "https://raw.githubusercontent.com/jpothanc/developer-notes/main/java/collections.md",
            },
            {
              name: "azure-cheat-sheet",
              description: "azure cheat sheet",
              link: "https://raw.githubusercontent.com/jpothanc/developer-notes/main/azure/0-azure%20cheat-sheet.md",
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
