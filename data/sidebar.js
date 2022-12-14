import Book from "../components/icons/book";
import Folder from "../components/icons/folder";
import Home from "../components/icons/home";
import Paper from "../components/icons/paper";
import Settings from "../components/icons/settings";
import User from "../components/icons/user";

export default [
  [
    {
      href: "/beranda",
      icon: <Home />,
    },
    {
      href: "/peminjaman",
      icon: <Book />,
    },
    {
      href: "/penelitian",
      icon: <Paper />,
    },
    {
      href: "/sumbang-buku",
      icon: <Folder />,
    },
  ],
  [
    {
      href: "/pengaturan",
      icon: <Settings />,
    },
    {
      href: "/profil",
      icon: <User />,
    },
  ],
];
