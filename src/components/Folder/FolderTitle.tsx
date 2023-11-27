import { useState } from "react";

interface Prop {
  title?: string,
  maxLength?: number,
  onClickAddCard: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const FolderTitle = ({title, maxLength, onClickAddCard}: Prop) => {
  const [folderTitle, setFolderTitle] = useState(title);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setFolderTitle(event.target.value);
  }

  return (
    <form className="folder-title">
      <input
        placeholder="Title"
        title="title"
        value={folderTitle}
        onChange={handleChange}
        maxLength={maxLength}
      />
      <button className="folder-add-card-btn" onClick={onClickAddCard}>Add Card</button>
    </form>
  );
};

export default FolderTitle;
