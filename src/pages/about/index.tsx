import type { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/images/mememe.jpg";

import { useAppSelector } from "@store/hooks";

const About: FunctionComponent = () => {
  const themeColor = useAppSelector((state) => state.general.theme);
  return (
    <>
      <div className="containerflex justify-center h-max-content md:h-screen w-screen px-16 md:px-32">
        <div className="flex-row mt-12">
          <h1 className="text-6xl md:text-7xl font-bold">About Me</h1>
          <div className="mt-12">
            <article className="text-xl md:text-2xl">
              <div className="float-center md:float-left md: md:pr-5 lg:px-10 md:w-max inset-x-0">
                <Image
                  className="drop-shadow-lg rounded-lg"
                  src={profilePic}
                  layout="intrinsic"
                  width="300px"
                  height="400px"
                  alt="profile pic"
                />
              </div>
              My name is Thitiwat Teeramessiriyos. Now I'm studying in
              Thai-Nichi Institude of Technology in year 3. I'm a student of
              Information Technology. I have a passion about programming
              spectific at web development. I always trying to learn new things.
              Now I study about JavaScript, TypeScript, NextJS, React, Redux,
              GraphQL and Sass. In future I want to works as full-stact
              developer, but at first I want to spectific at front-end.
            </article>
          </div>
          <div className="mt-24 grid auto-cols-max float-right right-16 mb-24">
            <Link href="/resume">
              <button
                className={`${
                  themeColor === "light"
                    ? "hover:bg-black text-black hover:text-white border-black"
                    : "hover:bg-white text-white hover:text-black border-white "
                } bg-transparent hover:border-transparent font-semibold py-2 px-4 border rounded-full`}
              >
                Resume {themeColor === "light" ? "📜" : "📄"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
