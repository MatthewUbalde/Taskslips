import React from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CardAdd({onClick}: Props) {
  return (
    <button className="card card-add" onClick={onClick}>
      Add Card
    </button>
  );
}
