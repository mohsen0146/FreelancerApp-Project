import { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN" ? true : false;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({
      id: project._id,
      data: { status },
    });
  };

  return (
    <div className="w-20">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          enabled={enabled}
          onChange={toggleHandler}
          label={
            project.status === "OPEN" ? (
              <span className=" ">باز</span>
            ) : (
              <span className="">بسته</span>
            )
          }
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
