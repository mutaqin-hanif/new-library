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
    { Header: "TANGGAL PERPANJANG", accessor: "extend" },
    { Header: "DENDA", accessor: "forfeit" },
  ],
};
