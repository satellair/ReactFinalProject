import type { FunctionComponent } from "react";
import Icon from "@atoms/icon";

import { LinkItemList } from "@types";
import { Facebook, GitHub, Linkedin, AlertOctagon } from "react-feather";

import { useAppSelector } from "@store/hooks";

const iconitem: LinkItemList[] = [
  [Facebook, "https://www.facebook.com/slepfact/", "Facebook"],
  [GitHub, "https://github.com/thitiwat-t", "GitHub"],
  [
    Linkedin,
    "https://www.linkedin.com/in/thitiwat-teeramessiriyos-66a712227/",
    "Linkedin",
  ],
  [AlertOctagon, "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "Surprise"],
];

const Contact: FunctionComponent = () => {
  const themeColor = useAppSelector((state) => state.general.theme);
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="flex-row">
          <h1 className="text-8xl md:text-9xl font-bold">Contact Me</h1>
          <div className="mt-28 grid grid-flow-col gap-12 auto-cols-max justify-center">
            {iconitem.map(([icon, link, title]) => {
              return (
                <div className="">
                  <a target="_blank" href={link} rel="noreferrer">
                    <Icon Icon={icon} theme={themeColor} size={48} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
