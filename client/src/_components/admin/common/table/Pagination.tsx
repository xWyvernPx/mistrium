import React from "react";
interface PaginationProps {
  total?: number;
  page: number;
  limit: number;
  handlePrevious: Function;
  handleNext: Function;
}
const Pagination: React.FC<PaginationProps> = ({ ...props }) => {
  return (
    <div className="flex justify-between mt-5">
      <span className="text-lg">Total : {props?.total || 0}</span>
      <div className="flex w-fit gap-2">
        <button
          onClick={() => props.handlePrevious()}
          disabled={props?.page <= 1}
          className="w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md disabled:bg-transparent disabled:border-indigo-200 
          disabled:border-solid disabled:border-2 disabled:text-indigo-300"
        >
          Previous
        </button>
        <button
          onClick={() => props.handleNext()}
          disabled={props?.page + 1 > Math.ceil(props?.total / props?.limit)}
          className="w-fit min-w-[5rem] justify-center px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md disabled:bg-transparent disabled:border-indigo-200 
          disabled:border-solid disabled:border-2 disabled:text-indigo-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
