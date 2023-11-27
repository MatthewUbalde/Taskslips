import { useState } from "react";

interface Prop {
  title?: string;
  maxLength?: number;
  onClickAddCard: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FolderTitle = ({ title, maxLength, onClickAddCard }: Prop) => {
  const [folderTitle, setFolderTitle] = useState(title);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setFolderTitle(event.target.value);
  }

  return (
    <div className="folder-title">
      <form>
        <input
          placeholder="Title"
          title="title"
          value={folderTitle}
          onChange={handleChange}
          maxLength={maxLength}
        />
      </form>
      <button className="folder-add-card-btn" onClick={onClickAddCard}>
        Add Card
      </button>
    </div>
  );
};

export default FolderTitle;
