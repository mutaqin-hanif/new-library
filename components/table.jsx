import { useTable } from "react-table";

export default function ({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table
      {...getTableProps()}
      className="table-fixed border-separate border-spacing-y-3"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="font-semibold text-left bg-white m-5"
          >
            {headerGroup.headers.map((column, i, self) => {
              if (i === 0) {
                return (
                  <th
                    {...column.getHeaderProps()}
                    className="rounded-tl-lg rounded-bl-lg pl-5"
                  >
                    {column.render("Header")}
                  </th>
                );
              }
              if (i === self.length - 1) {
                return (
                  <th
                    {...column.getHeaderProps()}
                    className="rounded-tr-lg rounded-br-lg pr-5"
                  >
                    {column.render("Header")}
                  </th>
                );
              }
              return (
                <th {...column.getHeaderProps()} className="py-3">
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="bg-white">
              {row.cells.map((cell, i, self) => {
                if (i === 0) {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="rounded-tl-lg rounded-bl-lg pl-5 py-3"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                }
                if (i === self.length - 1) {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="rounded-tr-lg rounded-br-lg pr-5 py-3"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                }
                return (
                  <td {...cell.getCellProps()} className="py-3">
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
