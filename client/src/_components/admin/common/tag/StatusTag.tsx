import React from "react";

const StatusTag: React.FC<{
  name: string;
  color: "danger" | "warning" | "success";
}> = ({ name, color }) => {
  switch (color) {
    case "danger":
      return (
        <div
          className={`w-fit min-w-[3rem] text-[color:var(--white)] bg-[color:var(--danger)] py-1 px-2 rounded-md`}
        >
          {name}
        </div>
      );
    case "warning":
      return (
        <div
          className={`w-fit min-w-[3rem] text-[color:var(--white)] bg-[color:var(--warning)] py-1 px-2 rounded-md`}
        >
          {name}
        </div>
      );
    default:
      return (
        <div
          className={`w-fit min-w-[3rem] text-[color:var(--white)] bg-[color:var(--success)] py-1 px-2 rounded-md`}
        >
          {name}
        </div>
      );
  }
};

export default StatusTag;
