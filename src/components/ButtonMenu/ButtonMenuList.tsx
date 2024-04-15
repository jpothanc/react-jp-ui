import "./ButtonMenu.scss";
import ButtonMenuItem from "./ButtonMenuItem";
import { buttonItem } from "./types";

type Props = {
  items: buttonItem[];
  onClick?: (item: buttonItem) => void;
};

const ButtonMenuList = ({ items, onClick: onClick }: Props) => {
  const handleClick = (item: buttonItem) => {
    onClick && onClick(item);
  };
  return (
    <>
      <div className="jp_btn_menu_container">
        {items.map((item, index) => {
          return (
            <ButtonMenuItem
              key={index}
              item={item}
              onClick={handleClick}
            ></ButtonMenuItem>
          );
        })}
      </div>
    </>
  );
};

export default ButtonMenuList;
