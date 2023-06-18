import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import sidebar from "../data/sidebar";
import logo from "../public/logo.png";

export default function () {
  const router = useRouter();
  const [upper, lower] = sidebar;
  return (
    <nav className="bg-purple-600 flex flex-col justify-between py-5 max-w-max h-screen sticky top-0">
      <div className="flex flex-col items-center">
        <Image src={logo} className="mb-3" alt="logo" />
        {upper.map((menu, i, arr) => {
          return (
            <Link
              href={menu.href}
              className={`hover:bg-purple-700 w-16 ${
                router.pathname === menu.href ? "bg-purple-800" : "bg-none"
              } p-5 cursor-pointer rounded-tl-lg rounded-bl-lg`}
              key={i}
            >
              {router.pathname !== menu.href ? menu.icon : menu.active}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-center">
        {lower.map((menu, i, arr) => {
          return (
            <Link
              href={menu.href}
              className="hover:bg-purple-800 p-5 cursor-pointer rounded-tl-lg rounded-bl-lg"
              key={i}
            >
              {menu.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
