export default function ProductSpecTable({ rows = [], caption }) {
  if (!rows.length) return null;

  return (
    <div className="overflow-x-auto border border-steel/25 bg-white">
      <table className="w-full min-w-[320px] text-left text-sm">
        {caption && (
          <caption className="border-b border-steel/20 bg-navy px-4 py-3 text-left font-display text-base font-bold text-white">
            {caption}
          </caption>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={`${row.label}-${i}`}
              className={i % 2 === 0 ? "bg-surface" : "bg-white"}
            >
              <th
                scope="row"
                className="w-2/5 px-4 py-3 font-semibold text-navy align-top"
              >
                {row.label}
              </th>
              <td className="px-4 py-3 text-ink-muted">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
