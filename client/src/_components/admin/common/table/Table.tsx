import React, { PropsWithChildren } from "react";

const Table: React.FC<PropsWithChildren<{ fields: Array<string> }>> = ({
  fields,
  children,
}) => {
  return (
    <div className="w-full">
      <table className="table-auto w-full">
        {/* <!-- Table header --> */}
        <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200">
          <tr>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
              <div className="flex items-center">
                <label className="inline-flex">
                  <span className="sr-only">Select all</span>
                  <input
                    id="parent-checkbox"
                    className="form-checkbox"
                    type="checkbox"
                    // @click="toggleAll"
                  />
                </label>
              </div>
            </th>
            {fields.map((field, i) => (
              <th
                key={i}
                className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
              >
                <div className="font-semibold text-left">{field}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-200">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
