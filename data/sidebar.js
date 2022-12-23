import Book from "../components/icons/book";
import BookActive from "../components/icons/bookActive";
import Folder from "../components/icons/folder";
import FolderActive from "../components/icons/folderActive";
import Home from "../components/icons/home";
import HomeActive from "../components/icons/homeActive";
import Paper from "../components/icons/paper";
import PaperActive from "../components/icons/paperActive";
import Settings from "../components/icons/settings";
import SettingsActive from "../components/icons/settingsActive";
import User from "../components/icons/user";

export default [
  [
    {
      href: "/beranda",
      icon: <Home />,
      active: <HomeActive />,
    },
    {
      href: "/peminjaman",
      icon: <Book />,
      active: <BookActive />,
    },
    {
      href: "/penelitian",
      icon: <Paper />,
      active: <PaperActive />,
    },
    {
      href: "/sumbang-buku",
      icon: <Folder />,
      active: <FolderActive />,
    },
  ],
  [
    {
      href: "/pengaturan",
      icon: <Settings />,
      active: <SettingsActive />,
    },
    {
      href: "/profil",
      icon: <User />,
    },
  ],
];
