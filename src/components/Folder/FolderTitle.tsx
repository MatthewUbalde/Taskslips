import { useState } from "react";

interface Prop {
  title: string,
}

const FolderTitle = ({title}: Prop) => {
  const [folderTitle, setFolderTitle] = useState(title);
  return (
    <form className="folder-title">
      <input
        placeholder="Title"
        title="title"
        value={folderTitle}
        onChange={(event) => setFolderTitle(event.target.value)}
      />
    </form>
  );
};

export default FolderTitle;
