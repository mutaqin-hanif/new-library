export default {
  borrow: [
    {
      Header: "JUDUL BUKU",
      accessor: "title",
      Cell: ({ row }) => {
        return (
          <span>
            <p className="text-sm text-gray-500">
              INDUK: {row.original.reg} | BARCODE: {row.original.barcode}
            </p>
            <p className="font-semibold">{row.original.title}</p>
          </span>
        );
      },
    },
    { Header: "LOKASI BUKU", accessor: "loc" },
    { Header: "TANGGAL PINJAM", accessor: "borrow" },
    { Header: "TANGGAL KEMBALI", accessor: "back" },
    {
      Header: "TANGGAL PERPANJANG",
      accessor: "extend",
      Cell: ({ row }) => {
        return (
          row.original.extend || (
            <button className="bg-amber-500 px-4 rounded py-1">
              Perpanjang
            </button>
          )
        );
      },
    },
    { Header: "DENDA", accessor: "forfeit" },
  ],
};
