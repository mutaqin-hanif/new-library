import { useState } from "react";
import BellIcon from "../../components/icons/bell";
import MailIcon from "../../components/icons/mail";
import Sidebar from "../../components/sidebar";
import Inbox from "../home/inbox";

export default function ({ children, title }) {
  const [showInbox, setShowInbox] = useState(false);

  return (
    <div className="w-full flex bg-gray-500/10">
      <Sidebar />
      <div className="m-10 w-full">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl">{title}</h1>
          <span className="flex gap-3">
            <button>
              <BellIcon />
            </button>
            <button onClick={() => setShowInbox(true)}>
              <MailIcon />
            </button>
          </span>
        </div>
        {children}
        <Inbox showInbox={showInbox} setShowInbox={setShowInbox} />
      </div>
    </div>
  );
}
