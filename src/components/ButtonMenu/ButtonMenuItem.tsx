import { buttonItem } from "./types";

type Props = {
  item: buttonItem;
  selected?: boolean;
  onClick?: (item: buttonItem) => void;
};
const ButtonMenuItem = ({ item, selected, onClick: onClick }: Props) => {
  return (
    <>
      <div
        className="jp_btn_menu_item"
        style={{
          backgroundColor: item.bgColor,
          color: item.textColor,
          scale: selected ? "1.1" : "1",
          border: selected ? "1px solid white" : "",
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
