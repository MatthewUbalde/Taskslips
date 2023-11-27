import { useState } from "react";

interface Prop {
  title?: string,
  maxLength?: number
}

const FolderTitle = ({title, maxLength}: Prop) => {
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
    </form>
  );
};

export default FolderTitle;
