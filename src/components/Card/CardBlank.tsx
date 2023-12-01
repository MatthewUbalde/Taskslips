import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CardBlank({ children, handleClick }: Props) {
  return (
    <button className="card color-light card-temp font-large" onClick={handleClick}>
      {children}
    </button>
  );
}

export default CardBlank;
