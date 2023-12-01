import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities/useSyntheticListeners";
import React, { LegacyRef } from "react";
import "../../colors.scss";
import "./ButtonsUtility.scss";

interface Props {
  color?: "light" | "dark";
  direction?: "row" | "column";
  handleDelete?: (
    event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete?: (
    event: React.MouseEvent<HTMLButtonElement>) => void;
  dndListeners?: SyntheticListenerMap | undefined;
  dndRef?: LegacyRef<HTMLButtonElement>;
}

function ButtonsUtility({
  color,
  direction,
  handleDelete,
  handleComplete,
  dndRef,
  dndListeners,
}: Props) {
  const oppositeColor = color === "light" ? "dark" : "light";
  
  return (
    <div className={`buttons-utility-container color-${color} flex-${direction}`}>
      {handleDelete && (
        <button
          className={`button-utility color-${oppositeColor} font-small`}
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
      {(dndListeners || dndRef) && (
        <button
          className={`button-utility color-${oppositeColor} font-small`}
          ref={dndRef}
          {...dndListeners}
        >
          Move
        </button>
      )}
      {handleComplete && (
        <button
          className={`button-utility color-${oppositeColor} font-small`}
          onClick={handleComplete}
        >
          Complete
        </button>
      )}
    </div>
  );
}

export default ButtonsUtility;
