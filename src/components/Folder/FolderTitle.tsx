import { useState } from "react";

interface Prop {
  title?: string;
  maxLength?: number;
  //onClickAddCard: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FolderTitle = ({ title, maxLength }: Prop) => {
  const [folderTitle, setFolderTitle] = useState(title ?? '');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setFolderTitle(event.target.value);
  }

  return (
    <div className="folder-title">
      <form>
        <input
          className="folder-title-field"
          placeholder="Title"
          title="title"
          value={folderTitle}
          onChange={handleChange}
          maxLength={maxLength}
        />
      </form>
      
    </div>
  );
};

export default FolderTitle;
