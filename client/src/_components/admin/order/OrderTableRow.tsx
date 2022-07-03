import React from "react";
interface RowProps {
  order: {
    id: number;
    name: string;
    phone: string;
    delivery_type: string;
    delivery_cost: number;
    process: number;
    created_at: string;
    order_details: any[];
    payment_intent_id: string;
  };
}

const OrderTableRow: React.FC<RowProps> = ({ order }) => {
  return (
    <tr className="">
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              className="table-item form-checkbox"
              type="checkbox"
              // @click="uncheckParent"
            />
          </label>
        </div>
      </td>
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
    <div className="flex items-center relative">
      <button>
        <svg
          className="w-4 h-4 shrink-0 fill-current text-yellow-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
        </svg>
      </button>
    </div>
  </td> */}

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{order?.id}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{order?.name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-center">{order?.phone}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {order?.process}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {order?.delivery_type}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {order?.created_at}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {order?.order_details?.reduce((prev, order_detail) => {
            prev += order_detail?.quantity * order_detail?.product?.price;
            return prev;
          }, 0) || 0}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {/* TODO : status tag */}
          {order?.payment_intent_id}
        </div>
      </td>
    </tr>
  );
};

export default OrderTableRow;
