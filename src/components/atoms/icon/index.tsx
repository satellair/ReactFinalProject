import type { Icon as IconType } from "react-feather";

type IconItem = {
  Icon: IconType;
  theme: string;
  size?: number;
};

const Icon = ({ Icon, theme, size }: IconItem) => {
  return (
    <div className="overflow-visible transition ease-in-out hover:-translate-y-1 hover:scale-125 hover:drop-shadow-md">
      <Icon size={size || 32} color={theme === "light" ? "black" : "white"} />
    </div>
  );
};

export default Icon;
