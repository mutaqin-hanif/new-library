import Image from "next/image";
import Link from "next/link";
import sidebar from "../data/sidebar";

import logo from "../public/logo.png";
import BookIcon from "./icons/book";
import FolderIcon from "./icons/folder";
import HomeIcon from "./icons/home";
import PaperIcon from "./icons/paper";
import SettingsIcon from "./icons/settings";
import UserIcon from "./icons/user";

export default function () {
  return (
    <nav className="bg-purple-600 flex flex-col justify-between py-5 max-w-max h-screen">
      <div className="flex flex-col items-center">
        <Image src={logo} className="mb-3" />
        {sidebar[0].map((menu, i, arr) => {
          return (
            <Link
              href={menu.href}
              className="hover:bg-purple-800 p-5 cursor-pointer rounded-tl-lg rounded-bl-lg"
            >
              {menu.icon}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-center">
        {sidebar[1].map((menu, i, arr) => {
          return (
            <Link
              href={menu.href}
              className="hover:bg-purple-800 p-5 cursor-pointer rounded-tl-lg rounded-bl-lg"
            >
              {menu.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
