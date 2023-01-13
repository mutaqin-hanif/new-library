import BellIcon from "../../components/icons/bell";
import MailIcon from "../../components/icons/mail";
import Sidebar from "../../components/sidebar";

export default function ({ children, title }) {
  return (
    <div className="w-full flex bg-gray-500/10">
      <Sidebar />
      <div className="m-10 w-full">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl">{title}</h1>
          <span className="flex gap-3">
            <BellIcon />
            <MailIcon />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
