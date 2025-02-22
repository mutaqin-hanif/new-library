import { useMemo, useState } from "react";
import PaperProcess from "../components/home/paperProcess";
import SideHead from "../components/layouts/sideHead";
import Table from "../components/table";
import bookBorrowing from "../dummies/bookBorrowing";
import tableCols from "../dummies/tableCols";
import NewsCard from "../components/home/newsCard";

import news from "dummies/news";

export default function Home() {
  const [donateState, setDonateState] = useState([true, false, false, false])

  return (
    <SideHead title="Beranda">
      <div className="flex gap-5 mt-10">
        {/* left */}
        <div>
          {/* peminjaman */}
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
          {/* berita */}
          <div>
            <div className="flex justify-between mb-3">
              <h1 className="font-bold text-xl">Berita</h1>
              <a href="#" className="font-semibold text-gray-500">
                Lihat Semua
              </a>
            </div>
            <div className="flex flex-col gap-y-3">
              {news.map((item) => (
                <NewsCard {...item} key={item.newsThumbnail} />
              ))}
            </div>
          </div>
        </div>
        {/* right */}
        <div className="bg-white p-5 w-1/2 rounded-lg">
          <PaperProcess donateState={donateState}/>
        </div>
      </div>
    </SideHead>
  );
}
