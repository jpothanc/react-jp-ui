import { buttonItem } from "./types";

type Props = {
  item: buttonItem;
  onClick?: (item: buttonItem) => void;
};
const ButtonMenuItem = ({ item, onClick: onClick }: Props) => {
  return (
    <>
      <div
        className="jp_btn_menu_item"
        style={{
          backgroundColor: item.bgColor,
          color: item.textColor,
        }}
        onClick={() => onClick && onClick(item)}
      >
        {item.name}
        {item.description == null ? (
          ""
        ) : (
          <div
            className="jp_btn_menu_subitem"
            style={{
              backgroundColor: item.bgColorDesc,
              color: item.textColorDesc,
            }}
          >
            {item.description}
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonMenuItem;
