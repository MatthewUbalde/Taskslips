import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CardBlank({ children, handleClick }: Props) {
  return (
    <button className="card card-temp font-large" onClick={handleClick}>
      {children}
    </button>
  );
}

export default CardBlank;
