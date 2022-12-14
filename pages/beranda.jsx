import { useMemo } from "react";
import PaperProcess from "../components/home/paperProcess";
import SideHead from "../components/layouts/sideHead";
import Table from "../components/table";
import bookBorrowing from "../dummies/bookBorrowing";
import tableCols from "../dummies/tableCols";

export default function Home() {
  return (
    <SideHead title="Beranda">
      <div className="flex gap-5 mt-10">
        {/* left */}
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Peminjaman Buku</h1>
            <a href="#" className="font-semibold text-gray-500">
              Lihat Semua
            </a>
          </div>
          <Table
            columns={useMemo(() => tableCols.borrow, [])}
            data={useMemo(() => bookBorrowing, [])}
          />
        </div>
        {/* right */}
        <div className="bg-white p-5 w-1/2 rounded-lg">
          <PaperProcess />
        </div>
      </div>
    </SideHead>
  );
}
