import { useEffect, useRef, useState, useMemo } from "react";
import Table from "../components/table";
import SideHead from "../components/layouts/sideHead";
import bookBorrowing from "../dummies/bookBorrowing";
import tableCols from "../dummies/tableCols";
import bookHistory from "../dummies/bookHistory";

export default function () {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const view = [
    <Table
      columns={useMemo(() => tableCols.borrow, [])}
      data={useMemo(() => bookBorrowing, [])}
    />,
    <Table
      columns={useMemo(() => tableCols.borrow, [])}
      data={useMemo(() => bookHistory, [])}
    />,
  ];

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <SideHead title="Peminjaman Buku">
      <div className="mt-7">
        <div className="flex gap-7 font-semibold">
          <button
            key={0}
            ref={(el) => (tabsRef.current[0] = el)}
            className="pt-2 pb-3"
            onClick={() => setActiveTabIndex(0)}
          >
            Peminjaman saat ini
          </button>
          <button
            key={1}
            ref={(el) => (tabsRef.current[1] = el)}
            className="pt-2 pb-3"
            onClick={() => setActiveTabIndex(1)}
          >
            Riwayat
          </button>
        </div>
        <span className="w-full">
          <hr
            className="absolute border-2 border-purple-700 transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
        </span>
      </div>
      {view[activeTabIndex]}
    </SideHead>
  );
}
