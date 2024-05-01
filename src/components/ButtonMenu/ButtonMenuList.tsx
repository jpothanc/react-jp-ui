import { useEffect, useState } from "react";
import "./ButtonMenu.scss";
import ButtonMenuItem from "./ButtonMenuItem";
import { buttonItem } from "./types";

type Props = {
  items: buttonItem[];
  onClick?: (item: buttonItem) => void;
};

const ButtonMenuList = ({ items, onClick: onClick }: Props) => {
  const [selected, setSelected] = useState<number>(-1);
  const handleClick = (index: number, item: buttonItem) => {
    if (onClick) {
      onClick(item);
      setSelected(index);
    }
  };
  useEffect(() => {
    setSelected(-1);
  }, [items]);

  return (
    <>
      <div className="jp_btn_menu_container">
        {items.map((item, index) => {
          return (
            <>
              <ButtonMenuItem
                key={index}
                item={item}
                selected={selected === index}
                onClick={() => handleClick(index, item)}
              ></ButtonMenuItem>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ButtonMenuList;
