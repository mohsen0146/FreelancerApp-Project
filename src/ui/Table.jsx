function Table({ children }) {
  return (
    <div className="overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children, classes }) {
  return <tr className={classes}>{children}</tr>;
}

Table.Header = TableHeader;
Table.TableBody = TableBody;
Table.Row = TableRow;
