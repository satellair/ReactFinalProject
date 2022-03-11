import type { FunctionComponent } from "react";
import SkillBlock from "@molecules/skillblock";
import type { SkillItemList } from "@types";
import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiChakraui,
  SiNodedotjs,
} from "react-icons/si";
import { useAppSelector } from "@store/hooks";
import EduCard from "@organisms/educard";
import acsp from "/public/images/acsp.png";
import tni from "/public/images/tni.png";

const skilllist: SkillItemList[] = [
  [SiJavascript, 65, "Javascript"],
  [SiTypescript, 40, "TypeScript"],
  [SiNodedotjs, 20, "Node.js"],
  [SiTailwindcss, 50, "TailwindCSS"],
  [SiChakraui, 60, "ChakraUI"],
  [SiReact, 60, "React"],
  [SiNextdotjs, 40, "Next.js"],
  [SiRedux, 65, "Redux"],
  [SiGraphql, 25, "GraphQL"],
  [SiPython, 60, "Python"],
];

type EduSchema = [any, string, string];

const edulist: EduSchema[] = [
  [tni, "2019 - Present", "Thai-Nichi Institute of Technology"],
  [acsp, "2014 - 2019", "Assumption College Samutprakarn"],
];

const About: FunctionComponent = () => {
  const themeColor = useAppSelector((state) => state.general.theme);
  return (
    <>
      <div className="containerflex justify-center h-max-content w-screen px-16 lg:px-32">
        <div className="flex-row mt-12">
          <h1 className="text-6xl md:text-7xl font-bold">Resume</h1>
          <div className="mt-6 md:mt-12 md:px-10">
            <h2 className="text-3xl font-bold">Skill</h2>
            <div className="grid md:grid-cols-2 gap-x-8 w-full">
              {skilllist.map(([Icon, level, text]) => {
                return (
                  <div className="mt-4">
                    <SkillBlock
                      Icon={Icon}
                      text={text}
                      level={level}
                      theme={themeColor}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6 md:mt-12 md:px-10">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="mb-12">
              {edulist.map(([img, year, text]) => {
                return (
                  <div className="mt-12">
                    <EduCard
                      img={img}
                      theme={themeColor}
                      year={year}
                      name={text}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
