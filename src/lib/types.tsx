// CardData holds the data of that Cards hold.
// The core building blocks of this board.
export type CardData = {
  id: string | number,
  description?: string,
  // Had to include number due to how its methods work
  date_modified: Date | number, 
  // working - Currently working on task
  // nigh - Almost completed on task
  // completed - Task completed
  progression?: 'working' | 'nigh' | 'completed' 
  // needed - Task needed to be completed
  // important - Task that's important to be completed
  // crisis - Task needed to be completed immediately
  importance?: 'needed' | 'important' | 'crisis',
  is_optional: boolean,
  deleteCard: (id: string | number) => void,
}

// FolderData holds these Cards for organization uses
export type FolderData = {
  id: string | number,
  title?: string,
  cards: Array<CardData>,
  // This is to possibly temporarily hold data for computation
  completed_cards?: number,
  deleteFolder: (id: string | number) => void,
}

// Each project has separate Binders
// BinderData holds these Folders which holds your Cards
export type BinderData = {
  id: string | number,
  title?: string,
  folders: Array<FolderData>,
  // This is to possibly temporarily hold data for computation
  completed_folders?: number,
}

// ProjectData holds the entire binder, folder, and cards
export type ProjectData = {
  title: string,
  description?: string,
  binders: Array<BinderData>,
  completed_folders: number,
  date_created: Date | number,
  date_modified?: Date | number,
  date_deadline?: Date | number,
}