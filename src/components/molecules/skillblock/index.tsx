import type { SkillItem } from "@types";

interface SkillItemProps extends SkillItem {
  theme: string;
}

const SkillBlock = ({ Icon, theme, level, text }: SkillItemProps) => {
  return (
    <div
      className={`${
        theme === "light"
          ? "text-black hover:border-black"
          : "text-white hover:border-white"
      } overflow-visible transition ease-in-out hover:scale-105 hover:drop-shadow-md p-2 bg-transparent rounded-md border-transparent hover:border-2`}
    >
      <Icon color={theme === "light" ? "black" : "white"} size={48} />
      <div className="mb-1 text-base font-medium ">{text}</div>
      <div
        className={`${
          theme === "light" ? "bg-gray-300" : "bg-gray-700 "
        } w-full rounded-full`}
      >
        <div
          className={`${
            theme === "light" ? "bg-dark text-white" : "bg-light text-black"
          } bg-dark text-xs font-medium text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${level}%` }}
        >
          {level}%
        </div>
      </div>
    </div>
  );
};

export default SkillBlock;
