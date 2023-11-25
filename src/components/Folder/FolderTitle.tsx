import { useState } from "react";

interface Prop {
  title: string,
  maxLength?: number
}

const FolderTitle = ({title, maxLength}: Prop) => {
  const [folderTitle, setFolderTitle] = useState(title);
  return (
    <form className="folder-title">
      <input
        placeholder="Title"
        title="title"
        value={folderTitle}
        onChange={(event) => setFolderTitle(event.target.value)}
        maxLength={maxLength}
      />
    </form>
  );
};

export default FolderTitle;
