import { useState } from "react";

interface Prop {
  title?: string;
  maxLength?: number;
  cardsAmount?: number;
  cardsComplete?: number;
}

const FolderTitle = ({ title, maxLength, cardsComplete, cardsAmount }: Prop) => {
  const [folderTitle, setFolderTitle] = useState(title ?? "");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setFolderTitle(event.target.value);
  }

  return (
    <form className="folder-title color-light">
      <input
        className="folder-title-element folder-title-field font-larger"
        placeholder="Title"
        title="title"
        value={folderTitle}
        onChange={handleChange}
        maxLength={maxLength}
      />
      <div className="folder-title-element folder-card-amount font-larger">
        {cardsAmount != 0 ? `${cardsComplete ?? 0}/${cardsAmount}` : ""}
      </div>
    </form>
  );
};

export default FolderTitle;
