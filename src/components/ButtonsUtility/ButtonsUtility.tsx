import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities/useSyntheticListeners";
import React, { LegacyRef } from "react";
import "./ButtonsUtility.scss";

interface Props {
  color?: "light" | "dark";
  direction?: "row" | "column";
  handleDelete?: (
    event: React.MouseEvent<HTMLButtonElement>) => void;
  dndListeners?: SyntheticListenerMap | undefined;
  dndRef?: LegacyRef<HTMLButtonElement>;
}

function ButtonsUtility({
  color,
  direction,
  handleDelete,
  dndRef,
  dndListeners,
}: Props) {
  return (
    <div className={`buttons-utility-container flex-${direction}`}>
      {handleDelete && (
        <button
          className={`button-utility button-utility-${color}`}
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
      {(dndListeners || dndRef) && (
        <button
          className={`button-utility button-utility-${color}`}
          ref={dndRef}
          {...dndListeners}
        >
          Move
        </button>
      )}
    </div>
  );
}

export default ButtonsUtility;
