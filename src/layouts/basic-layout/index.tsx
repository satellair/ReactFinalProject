import type { FunctionComponent } from "react";
import { Menu, X, Moon, Sun } from "react-feather";

import Icon from "@atoms/icon";

import Link from "next/link";
import dynamic from "next/dynamic";

import { useAppSelector, useAppDispatch } from "@store/hooks";
import { toggleTheme, toggleNavOpen } from "@store/generalSlice";

const NextNProgress = dynamic(() => import("nextjs-progressbar"));

// import type { NavItemsProps } from "@components/navitem";

const navitem = [
  ["/", "Home"],
  ["/about", "About"],
  ["/products", "Products"],
  ["/cart", "Cart"],
  ["/contact", "Contact"],
];

const MiniNav: FunctionComponent = ({ children }) => {
  const menuIsOpen = useAppSelector((state) => state.general.navopen);
  const themeColor = useAppSelector((state) => state.general.theme);
  const dispatch = useAppDispatch();

  const toggleNav = (state: boolean) => {
    dispatch(toggleNavOpen(state));
  };
  const toggleThemeColor = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <NextNProgress
        color="#EBAC8A"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <div
        className={`relative w-screen h-screen ${
          themeColor === "light" ? "bg-light text-black" : "bg-dark text-white"
        }`}
      >
        <section className="fixed columns-2 top-10 right-10">
          <div
            className="z-2"
            onClick={toggleThemeColor}
          >
            <Icon
              Icon={themeColor === "light" ? Moon : Sun}
              theme={themeColor}
            />
          </div>
          <div
            className="z-2"
            onClick={() => toggleNav(true)}
          >
            <Icon Icon={Menu} theme={themeColor} />
          </div>
        </section>
        {menuIsOpen && (
          <div
            className={`fixed top-0 left-0 right-0 w-screen h-screen ${
              themeColor === "light"
                ? "bg-light text-black"
                : "bg-dark text-white"
            } opacity-100 z-10 overflow-auto`}
          >
            <div
              className="fixed top-10 right-10 z-2"
              onClick={() => toggleNav(false)}
            >
              <Icon Icon={X} theme={themeColor} />
            </div>
            {/* navmenu */}
            <div className="container px-4 mx-auto inset-x-25 top-25 text-center">
              <div className="">
                {navitem.map((item) => {
                  return (
                    <div className="top-30">
                      <Link href={item[0]}>
                        <div
                          key={item[1]}
                          title={item[1]}
                          className="block text-center text-3xl font-bold overflow-visible transition ease-in-out hover:-translate-y-1 hover:scale-125 hover:drop-shadow-md duration-300"
                          onClick={() => toggleNav(false)}
                        >
                          {item[1]}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <section className="flex">{children}</section>
      </div>
    </>
  );
};

export default MiniNav;
